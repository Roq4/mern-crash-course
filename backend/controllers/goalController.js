const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");

// @decs Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @decs set goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Set goals" });
});

// @decs Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @decs Delete goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
