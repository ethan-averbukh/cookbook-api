const express = require("express");
const Cookbook = require("../models/Cookbook");
const router = express.Router();

// Require the Cookbook controller.

// Write the route to list all cookbooks
router.get("/", async (req, res) => {
  const cookbooks = await Cookbook.find({});
  res.json({
    status: 200,
    cookbooks: cookbooks,
  });
});
// Write the route to get cookbook by title
router.get("/:bookTitle", async (req, res) => {
  const cookbooks = await Cookbook.find({ title: req.params.bookTitle });
  res.json({
    status: 200,
    cookbooks: cookbooks,
  });
});
// Write the route to get cookbook by year published
router.get('/year/:bookYearPublished', async (req, res) => {
  const numberYear = parseInt(req.params.bookYearPublished);
  const cookbooks = await Cookbook.find({
    yearPublished: numberYear,
  });
  res.json(cookbooks);
});

// Write the route to create a cookbook
router.post('/', async (req, res) => {
  const cookbook = await Cookbook.create({
    title: req.body.title,
    yearPublished: req.body.yearPublished,
  });
  res.json({
    status: 200,
    msg: cookbook,
  });
});

// Write the route to update a cookbook
router.put('/:bookId', async (req, res) => {
  const foundCookbook = await Cookbook.findByIdAndUpdate(
    req.params.bookId,
    {
      $set: {
        title: req.body.title,
      },
    },
    { new: true }
  );
  const cookbooks = await Cookbook.find({});
  res.json(cookbooks)
});
// Write the route to delete the cookbook by title
router.delete('/:bookTitle', async (req,res)=>{
    const foundCookbook = await Cookbook.deleteOne({title: req.params.bookTitle});
    res.json({
        status: 200,
        cookbook: foundCookbook
    })
})

module.exports = router;
