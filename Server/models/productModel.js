import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, minLength: 5, maxLength: 800 },
  price: { type: Number, required: true, min: 0 },
  description: String,
  category: String,
  image: String,
  rating: {
    rate: { type: Number, min: 0, max: 5 },
    count: Number,
  },
}, { strict: "throw" }); 

export const Product = mongoose.model("Product", productSchema);