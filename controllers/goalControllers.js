import asyncHandler from "express-async-handler";
import Goals from "../models/goalModel.js";
import Users from "../models/userModel.js";

// @desc    Get Goals
// @route   GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goals.find({ user: req.user.id });
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
    user: req.user.id,
  });

  res.json(goal);
});

// @desc    Update Goals
// @route   PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const goal = await Goals.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  if (!id) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await Users.findById(req.user.id);

  // Check for sure
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the login user can only update
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User is not Authorized");
  }

  const updateGoal = await Goals.findByIdAndUpdate(id, data, { new: true });
  res.json(updateGoal);
});

// @desc    Delete Goals
// @route   DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const goal = await Goals.findById(req.params.id);

  const user = await Users.findById(req.user.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Check for sure
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the login user can only delete
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User is not Authorized");
  }

  const goalDelete = await Goals.findByIdAndDelete(id);
  res.json(goalDelete);
});
