import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import products from "./data/products.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
