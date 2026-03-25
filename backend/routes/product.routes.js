import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from "../controllers/product.controller.js";
const productRoutes = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";

productRoutes.route("/").get(getProducts).post(protect, admin, createProduct);
productRoutes
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct);

export default productRoutes;
