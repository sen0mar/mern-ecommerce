import express from "express";
import products from "../data/products.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/product.model.js";

const productRoutes = express.Router();

productRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  }),
);

productRoutes.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Resource not found");
    }

    res.json(product);
  }),
);

export default productRoutes;
