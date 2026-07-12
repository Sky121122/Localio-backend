import express from "express";
import { addBusiness, deleteBusiness, getAllBusinesses, getBusinessById, getMyBusinesses, searchBusinesses, updateBusiness } from "../controllers/businessController.js";

const router = express.Router();

router.post("/", addBusiness);
router.get("/", getAllBusinesses);
router.get("/my/:ownerId", getMyBusinesses);
router.get("/search", searchBusinesses);
router.get("/:id", getBusinessById);
router.put("/:id", updateBusiness);
router.delete("/:id", deleteBusiness);

export default router;