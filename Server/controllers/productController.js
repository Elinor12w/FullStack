import * as productService from "../services/productService.js";
import fs from "fs";
import mongoose from "mongoose";

export const getAllProductsController = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductByIdController = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProductController = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }
    const updated = await productService.updateProduct(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Update failed: " + err.message });
  }
};

export const resetProductsController = async (req, res) => {
  try {
    await productService.clearAllProducts();
    
    const data = JSON.parse(fs.readFileSync("./Server/Products.json", "utf-8"));
    const products = await productService.insertManyProducts(data);
    res.json({ message: "Database reset successful!", count: products.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }
    await productService.deleteProduct(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
