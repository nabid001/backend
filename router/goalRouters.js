import express from "express";
import {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalControllers.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", protect, getGoals);

router.post("", protect, postGoal);

router.put("/:id", protect, updateGoal);

router.delete("/:id", protect, deleteGoal);

export default router;
