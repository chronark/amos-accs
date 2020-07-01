export interface BitcoinAPIConstructor {
  /**
   * Creates an instance of BitcoinAPI.
   */
  new (network: string): BitcoinAPI
}

/**
 * This interface defines the data required for the HTLC creation on the bitcoin blockchain.
 * You are welcome to implement this yourself and pass it to the HTLC class.
 *
 * The return objects are explicitly stated here as these are the only values we require.
 * Anything else returned from your api of choice can be ignored.
 *
 * @interface BitcoinAPI
 */
export interface BitcoinAPI {
  /**
   * Return height and timestamp of the last block.
   * Used for timelock calculations.
   */
  getLastBlock: () => Promise<{ height: number; timestamp: number }>

  /**
   * Return the timestamp of a block defined by its height.
   * Used for timelock calculations
   */
  getTimestampAtHeight: (n: number) => Promise<number>

  /**
   * Pushes a transaction hex to the blockchain.
   * Returns the transactionID on success.
   * Throws on failure
   */
  pushTX: (transactionHex: string) => Promise<string>

  /**
   * Returns the preimage of the last incoming transaction.
   *
   * @param address - Any bitcoin address.
   * @returns Returns the preimage of the last incoming transaction.
   */
  getPreimageFromLastTransaction: (address: string) => Promise<string>
  /**
   * Returns the outgoing transaction of an address.
   *
   * @param address - Any bitcoin address.
   * @returns Amount of the transaction and its ID.
   */
  getValueFromLastTransaction: (address: string) => Promise<{ value: number; txID: string }>

  /**
   * Return the vout and value of the transaction.
   *
   * @param transactionID - ID of any bitcoin transaction.
   * @param address - The address to look for.
   * @returns vout and value
   */
  getOutput: (transactionID: string, address: string) => Promise<{ vout: number; value: number }>

  /**
   * Return the blockheight of a transaction.
   *
   * @param transactionID - ID of any bitcoin transaction.
   * @returns Blockheight or undefined if block is not mined/broadcasted yet.
   */
  getBlockHeight: (transactionID: string) => Promise<number | undefined>

  /**
   * Get fee estimates
   *
   * @returns Array with fee estimates for high, mid and low priority in satoshis/vbyte. If fee estimates are too close, it returns only one or two values.
   * @memberof BlockStream
   */
  getFeeEstimates: () => Promise<number[]>
}
