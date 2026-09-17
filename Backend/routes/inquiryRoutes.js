import express from "express";

import {
  createInquiry,
  getInquiries,
  getInquiryById,
  updateInquiry,
  deleteInquiry,
} from "../controllers/inquiryController.js";

import adminAuth from "../middleware/Auth.js";

const router = express.Router();

// Public
router.post("/", createInquiry);

// Admin
router.get("/", adminAuth, getInquiries);

router.get("/:id", adminAuth, getInquiryById);

router.put("/:id", adminAuth, updateInquiry);

router.delete("/:id", adminAuth, deleteInquiry);

export default router;
