import express from "express";
import cors from "cors";
import { getAllProductsController, getProductByIdController, updateProductController, resetProductsController ,deleteProductController} from "./controllers/productController.js";
import * as userCtrl from "./controllers/userController.js";
import { authMiddleware, adminMiddleware } from "./middleware/authMiddleware.js";
import { connectDB } from "./db/connection.js"; 
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
const PORT = process.env.PORT || 3000;

// ניתיבי מוצרים (public)
app.get("/api/products", getAllProductsController);
app.get("/api/products/:id",getProductByIdController ); 
app.put("/api/products/:id", updateProductController);  // דורש התחברות
app.post("/api/reset-products", resetProductsController);  // רק admin
app.delete("/api/products/:id",  deleteProductController);
// ניתיבי משתמשים
app.get("/api/users",  userCtrl.getAllUsersController);  // דורש התחברות
app.get("/api/users/:id", userCtrl.getUserByIdController);
app.post("/api/users", userCtrl.createUserController);
app.post("/api/users/many", userCtrl.insertManyUsersController);
app.put("/api/users/:id",  userCtrl.updateUserController);
app.delete("/api/users/all",  userCtrl.deleteAllUsersController);  // רק admin
app.delete("/api/users/:id",  userCtrl.deleteUserController);

// אימות
app.post("/api/register", userCtrl.registerController);
app.post("/api/login", userCtrl.loginController);

const startServer = async () => {
  try {
    
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
};

startServer();