import express from "express";

import { createUser, getUserProfile, updateUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.get("/:firebaseUID", getUserProfile);
router.put("/:firebaseUID", updateUserProfile);

export default router;