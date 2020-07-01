import mongoose, { Schema, Document } from "mongoose"

export interface OrderType extends Document {
  address: string
  timelock: string
  txFees: string
  bidType: string
  askType: string
  bidAmount: number
  expiryDate: string
  askAmount: number
}

const postSchema = new Schema({
  address: {
    type: String,
  },
  timelock: {
    type: String,
  },
  txFees: {
    type: String,
  },
  bidType: {
    type: String,
  },
  askType: {
    type: String,
  },
  bidAmount: {
    type: Number,
  },
  askAmount: {
    type: Number,
  },
  expiryDate: {
    type: String,
  },
})

export default mongoose.model<OrderType>("OrderCollection", postSchema)
