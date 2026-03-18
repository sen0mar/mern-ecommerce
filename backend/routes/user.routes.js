import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.route("/").post(registerUser).get(protect, admin, getAllUsers);

userRoutes.post("/auth", authUser);
userRoutes.post("/logout", logoutUser);

userRoutes
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

userRoutes
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default userRoutes;
