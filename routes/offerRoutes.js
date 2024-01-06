// offerRoutes.js

import express from "express";
import {
  offerPhotoController,
  createOfferController,
  getOffersController,
} from "../controllers/offerController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// Create offer
router.post(
  "/create-offer",
  requireSignIn,
  isAdmin,
  formidable(),
  createOfferController
);

// Get all offers
router.get("/get-offer", getOffersController);

//get photo
router.get("/offer-photo/:_id", offerPhotoController);

export default router;
