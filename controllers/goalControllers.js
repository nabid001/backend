import asyncHandler from "express-async-handler";
import Goals from "../models/goalModel.js";

// @desc    Get Goals
// @route   GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goals.find();
  res.json(goal);
});

// @desc    Post Goals
// @route   POST /api/goals
// @access Private
export const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
  const goal = await Goals.create({
    text: req.body.text,
  });

  res.json(goal);
});

// @desc    Update Goals
// @route   PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (!id) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updateGoal = await Goals.findByIdAndUpdate(id, data, { new: true });
  res.json(updateGoal);
});

// @desc    Delete Goals
// @route   DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const goalDelete = await Goals.findByIdAndDelete(id);
  res.json(goalDelete);
});
