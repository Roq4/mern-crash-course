const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");

const goalsArr = [
  {
    image: "../assets/images/featured-sets/cat-hotel.png",
    title: "Cat hotel",
    price: 59.99,
    category: "Pets",
    id: 1,
    pieces: 233,
    date: new Date(),
  },
  {
    image: "../assets/images/featured-sets/jazz-club.png",
    title: "Jazz-club",
    price: 79.99,
    category: "Music",
    id: 2,
    pieces: 233,
    date: new Date(),
  },
];

// @decs Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.create(goalsArr)
    .then((createdGoals) => {
      console.log("Goals: ", createdGoals);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
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
