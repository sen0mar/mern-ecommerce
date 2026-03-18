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

const userRoutes = express.Router();

userRoutes.route("/").post(registerUser).get(getAllUsers);

userRoutes.post("/login", authUser);
userRoutes.post("/logout", logoutUser);

userRoutes.route("/profile").get(getUserProfile).put(updateUserProfile);

userRoutes.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default userRoutes;
