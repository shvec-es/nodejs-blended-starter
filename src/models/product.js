import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      default: 'other',
      enum: ['books', 'electronics', 'clothing', 'other'],
    },
    description: {
      type: String,
      required: false,
    },
  },
  { timestamp: true, versionKey: false },
);

export const Product = model('Product', productSchema);
