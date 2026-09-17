import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import auth from "../middleware/Auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

export default adminRouter;
