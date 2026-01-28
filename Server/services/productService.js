import { Product } from "../models/productModel.js";
import mongoose from "mongoose";

export const getAllProducts = () => Product.find({});
export const getProductById = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  return Product.findById(id);
};
export const createProduct = (data) => new Product(data).save();
export const updateProduct = (id, data) => Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteProduct = (id) => Product.findByIdAndDelete(id);
export const clearAllProducts = () => Product.deleteMany({});
export const insertManyProducts =async  (data) => await Product.insertMany(data);