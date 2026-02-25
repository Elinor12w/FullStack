import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { getAllProductsController, getProductByIdController, createProductController, updateProductController, resetProductsController ,deleteProductController} from "./controllers/productController.js";
import * as userCtrl from "./controllers/userController.js";
import { authMiddleware, adminMiddleware } from "./middleware/authMiddleware.js";
import { connectDB } from "./db/connection.js"; 
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

// משרת קבצים סטטיים מ-dist
app.use(express.static(path.join(__dirname, "../dist")));

const PORT = process.env.PORT || 3000;

// ניתיבי מוצרים (public)
app.get("/api/products", getAllProductsController);
app.get("/api/products/:id",getProductByIdController ); 
app.post("/api/products", createProductController);
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

// fallback - שלח את index.html עבור כל נתיב שלא הוא API (לתמיכה ב-React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
 
const startServer = async () => {
  try {
    
    await connectDB();
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
};

startServer();
