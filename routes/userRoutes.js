import express from "express";

import { checkFavorite, createUser, getFavoriteBusinesses, getUserByFirebaseUID, getUserProfile, toggleFavorite, updateSelectedCity, updateUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.put("/city", updateSelectedCity);
// favourites
router.put("/favorite/:userId",toggleFavorite);
router.get("/favorites/:userId",getFavoriteBusinesses);
router.get("/favorite/:userId/:businessId",checkFavorite);
//user
router.get("/:firebaseUID", getUserByFirebaseUID);
router.get("/:firebaseUID", getUserProfile);
router.put("/:firebaseUID", updateUserProfile);
export default router;