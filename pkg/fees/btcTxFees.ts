import fetch from "node-fetch"

/**
 * Fetch Blockstreams's API to get fee estimates for target blocks and provides 5 fee values.
 *
 * @returns - Array containing five fee values to choose from.
 */
export async function getFeesBTC(): Promise<number[]> {
  const feeEstimates = await fetch("https://blockstream.info/api/fee-estimates").then((res) => res.json())
  const array: number[] = Object.values(feeEstimates)
  const transactionSize = 250

  // Getting specific indices for the different values
  const feeProposal = [array[0], array[5], array[11], array[17], array[23]]

  return feeProposal.map((value) => value * transactionSize)
}