import { Product } from '../models/product.js';

export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id) => {
  return Product.findById(id);
};

export const createProduct = async (payload) => {
  return await Product.create(payload);
};

export const updateProduct = async (id, payload) => {
  return await Product.findByIdAndUpdate(id, payload, {
    returnDocument: 'after',
  });
};

export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
