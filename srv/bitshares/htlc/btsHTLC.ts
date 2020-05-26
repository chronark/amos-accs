import { Apis as btsWebsocketApi } from "bitsharesjs-ws"
import { ChainStore, FetchChain, TransactionBuilder } from "bitsharesjs"
import { getSecret, Secret } from "../../../tmp/secret"
import { HTLCConfig, HTLCCreator } from "../../../pkg/types/htlc"

/**
 * Handler to crate HTLCs on the bitshares blockchain using a specified node.
 *
 * @class BitsharesHTLC
 * @implements {HTLCCreator}
 */
export default class BitsharesHTLC implements HTLCCreator {
  private node: string
  private websocket: Promise<void> | null
  /**
   * Creates an instance of BitsharesHTLC.
   *
   * @param node - The Bitshares node you want to connect to.
   * @memberof BitsharesHTLC
   */
  constructor(node: string) {
    this.node = node
    this.websocket = null
  }

  /**
   * Opens a websocket to a bitshares node
   *
   * This has to be done before you can interact with the blockchain.
   *
   * @private
   * @param node - The address of a node
   * @memberof BitsharesHTLC
   */
  private async openSocket(node: string): Promise<void> {
    this.websocket = await btsWebsocketApi.instance(node, true).init_promise
  }

  /**
   * Wrapper function to open the websocket if necessary.
   *
   * @param config - HTLC information.
   * @returns Success or failure.
   * @memberof BitsharesHTLC
   */
  public async create(config: HTLCConfig): Promise<{ success: boolean; secret: Secret }> {
    if (this.websocket === null) {
      await this.openSocket(this.node)
    }
    return this.createHTLC(config)
  }

  /**
   * Create and send the actual HTLC.
   *
   * Never call this function directly but use `create()` instead.
   * That's because the websocket must be open before creating an HTLC.
   *
   * @private
   * @param config - Configuration object for the HTLC.
   * @returns Success status and secret. Can be used for user feedback.
   * @memberof BitsharesHTLC
   */
  private async createHTLC(config: HTLCConfig): Promise<{ success: boolean; secret: Secret }> {
    // TODO: Requires proper error handling. Right now it always returns true.
    const { sender, receiver, amount, asset, time, privateKey } = config
    await ChainStore.init(false)
    const preimage = getSecret(32)

    const [senderAccount, toAccount, sendAsset] = await Promise.all([
      FetchChain("getAccount", sender),
      FetchChain("getAccount", receiver),
      FetchChain("getAsset", asset),
    ])

    const tr = new TransactionBuilder()
    /* eslint-disable @typescript-eslint/camelcase */
    tr.add_type_operation("htlc_create", {
      from: senderAccount.get("id"),
      to: toAccount.get("id"),
      amount: { amount: amount, asset_id: sendAsset.get("id") },
      preimage_hash: [2, preimage.hash],
      preimage_size: preimage.secret.length,
      claim_period_seconds: time,
    })
    /* eslint-enable @typescript-eslint/camelcase */

    await tr.set_required_fees()
    tr.add_signer(privateKey)
    tr.broadcast()

    return { success: true, secret: preimage }
  }
}