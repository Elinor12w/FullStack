import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 3000;
const DB_FILE = "./products.json";

app.use(cors());
app.use(express.json());



const connectDB = async () => {
  try {
    const mongoURI = "mongodb://127.0.0.1:27017/gocode-shop";
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected: gocode-shop");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

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
});

const Product = mongoose.model("Product", productSchema);


app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Invalid ID format" });
  }
});


app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.put("/products/:id", async (req, res) => {
  try {
   
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post("/reset-products", async (req, res) => {
  try {
    
    await Product.deleteMany({});
    
    const data = JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
    
    
    const products = await Product.insertMany(data);
    
    res.json({ message: "Database reset successful!", count: products.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
};

startServer();