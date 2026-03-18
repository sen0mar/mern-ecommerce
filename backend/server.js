import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
