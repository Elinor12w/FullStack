import express from "express";
import { getAllProductsController, getProductByIdController, updateProductController, resetProductsController ,deleteProductController} from "./controllers/productController.js";
import * as userCtrl from "./controllers/userController.js";
import { connectDB } from "./db/connection.js"; 
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/products", getAllProductsController);
app.get("/products/:id",getProductByIdController ); 
app.put("/products/:id", updateProductController);
app.post("/reset-products", resetProductsController);
app.delete("/products/:id", deleteProductController);


app.get("/users", userCtrl.getAllUsersController);
app.get("/users/:id", userCtrl.getUserByIdController);
app.post("/users", userCtrl.createUserController);
app.post("/users/many", userCtrl.insertManyUsersController);
app.put("/users/:id", userCtrl.updateUserController);
app.delete("/users/all", userCtrl.deleteAllUsersController);
app.delete("/users/:id", userCtrl.deleteUserController);
app.post("/register", userCtrl.registerController);


const startServer = async () => {
  try {
    
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
};

startServer();