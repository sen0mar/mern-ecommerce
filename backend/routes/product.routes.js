import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
const productRoutes = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";

productRoutes.route("/").get(getProducts).post(protect, admin, createProduct);
productRoutes
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default productRoutes;
