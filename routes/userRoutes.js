import express from "express";

import { createUser, getUserByFirebaseUID, getUserProfile, updateSelectedCity, updateUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.put("/city", updateSelectedCity);
router.get("/:firebaseUID", getUserByFirebaseUID);
router.get("/:firebaseUID", getUserProfile);
router.put("/:firebaseUID", updateUserProfile);

export default router;