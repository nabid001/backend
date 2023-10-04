import express from "express";
import {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalControllers.js";
const router = express.Router();

router.get("/", getGoals);

router.post("", postGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

export default router;
