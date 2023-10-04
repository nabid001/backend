import asyncHandler from "express-async-handler";

// @desc    Get Goals
// @route   GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  res.json({
    message: "Get Goals",
  });
});

// @desc    Post Goals
// @route   POST /api/goals
// @access Private
export const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
  res.json({ message: "Post Goals" });
});

// @desc    Update Goals
// @route   PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  res.json({
    message: `Update Goals ${req.params.id}`,
  });
});

// @desc    Delete Goals
// @route   DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.json({
    message: `Delete Goals ${req.params.id}`,
  });
});
