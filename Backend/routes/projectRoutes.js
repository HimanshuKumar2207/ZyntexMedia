import express from "express";
import upload from "../middleware/multer.js";
import {
  addProject,
  getAllProjects,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.post("/add-project", upload.single("image"), addProject);
router.get("/list-project", getAllProjects);
router.delete("/list-project/:id", deleteProject);

export default router;
