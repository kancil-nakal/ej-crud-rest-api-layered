const express = require("express");
const dotenv = require("dotenv");
const productController = require("./product/product.controller");

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome to Express API Server");
});

app.use("/api/products", productController);

app.listen(PORT, () => {
  console.log(`Express API Server running on port ${PORT}`);
});
