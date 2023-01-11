import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/admins", verifyToken, getAdmins);
router.get("/performance/:id", verifyToken, getUserPerformance);

export default router;
