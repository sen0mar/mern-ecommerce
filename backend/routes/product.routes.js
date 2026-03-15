import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/product.controller.js";
const productRoutes = express.Router();

productRoutes.route("/").get(getProducts);
productRoutes.route("/:id").get(getProductById);

export default productRoutes;
