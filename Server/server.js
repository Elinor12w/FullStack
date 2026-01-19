import express from "express";
import cors from "cors";
import { connectDB } from "./db/connection.js";
import { 
  getAllProductsController,
  getProductByIdController, 
  updateProductController, 
  resetProductsController 
} from "./controllers/productController.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.get("/products", getAllProductsController);
app.get("/products/:id", getProductByIdController);
app.put("/products/:id", updateProductController);
app.post("/reset-products", resetProductsController);

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
};

startServer();