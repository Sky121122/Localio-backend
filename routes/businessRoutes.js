import express from "express";
import { addBusiness, deleteBusiness, getAllBusinesses, getBusinessById, getBusinessesByCity, getCities, getFeaturedBusinesses, getMyBusinesses, getNewBusinesses, increaseViews, searchBusinesses, updateBusiness } from "../controllers/businessController.js";

const router = express.Router();

router.post("/", addBusiness);
router.get("/", getAllBusinesses);
router.get("/cities", getCities);
router.get("/featured", getFeaturedBusinesses);
router.get("/new", getNewBusinesses);
router.get("/city/:city", getBusinessesByCity);
router.get("/my/:ownerId", getMyBusinesses);
router.get("/search", searchBusinesses);
router.put("/view/:id", increaseViews);
router.get("/:id", getBusinessById);
router.put("/:id", updateBusiness);
router.delete("/:id", deleteBusiness);


export default router;