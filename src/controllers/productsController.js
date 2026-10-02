import createHttpError from 'http-errors';
import { Product } from '../models/product.js';
// 2 - з винесенням логіки до services
// import * as productServices from '../services/productService.js';

export const getAllProducts = async (req, res) => {
  const products = await Product.find();

  //   2
  //   const products = await productServices.getAllProducts();
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);

  //   2
  // const products = await productServices.getProductById(productId);

  //   if (!product) return res.status(404).json({ message: 'Product not found' });
  if (!product) throw createHttpError(404, 'Product not found');

  res.status(200).json(product);
};

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  //   2
  //  const product = await productServices.createProduct(req.body);

  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const { productId } = req.params;

  //   const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
  //     returnDocument: 'after',
  //   });
  const product = await Product.findByIdAndUpdate(productId, req.body, {
    returnDocument: 'after',
  });

  //   2
  //  const product = await productServices.updateProduct(productId, req.body)

  //   if (!product) return res.status(404).json({ message: 'Product not found' });
  if (!product) throw createHttpError(404, 'Product not found');

  res.status(200).json(product);
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findByIdAndDelete(productId);

  //   2
  // const product = await productServices.deleteProduct(productId);

  //   if (!product) return res.status(404).json({ message: 'Product not found' });
  if (!product) throw createHttpError(404, 'Product not found');

  res.status(200).json(product);
};
