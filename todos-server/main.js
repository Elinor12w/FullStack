import express from "express";
import fs from "fs";
const port = 3000;
const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  const products = fs.readFileSync("./products.json", { encoding: "utf-8" });
  const parsedProducts = JSON.parse(products);
  console.log(parsedProducts);
  res.send(parsedProducts);
});

// app.get("/todos/id/:id", (req, res) => {
//   res.send(req.params.id);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
