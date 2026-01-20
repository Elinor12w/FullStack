import express from "express";
import { getAllProductsController, getProductByIdController, updateProductController, resetProductsController ,deleteProductController} from "./controllers/productController.js";
import * as userCtrl from "./controllers/userController.js";
import { connectDB } from "./db/connection.js"; 

const app = express();
app.use(express.json());

// --- Product Routes (5) ---
app.get("/products", getAllProductsController);
app.get("/products/:id",getProductByIdController ); // הוספנו קודם
app.put("/products/:id", updateProductController);
app.post("/reset-products", resetProductsController);
app.delete("/products/:id", deleteProductController); // להוסיף אם טרם הוספת

// --- User Routes (9) ---
app.get("/users", userCtrl.getAllUsersController);
app.get("/users/:id", userCtrl.getUserByIdController);
app.post("/users", userCtrl.createUserController);
app.post("/users/many", userCtrl.insertManyUsersController);
app.put("/users/:id", userCtrl.updateUserController);
app.delete("/users/all", userCtrl.deleteAllUsersController);
app.delete("/users/:id", userCtrl.deleteUserController);


const startServer = async () => {
  try {
    await connectDB(); // זה השלב שבו השרת באמת מתחבר ל-DB
    app.listen(3000, () => console.log("🚀 Server is up and connected to DB"));
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
};

startServer()