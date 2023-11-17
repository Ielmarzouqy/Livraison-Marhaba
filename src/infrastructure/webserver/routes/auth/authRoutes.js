const express = require("express");
const authRoutes = express.Router();
const AuthController = require("../../../../adapters/controllers/auth/AuthController");
const authController = new AuthController();

authRoutes.post("/login", authController.login);

authRoutes.post("/register", authController.register);

authRoutes.post("/logout", authController.logout);

module.exports = authRoutes;
