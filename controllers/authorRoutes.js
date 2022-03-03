const express = require('express')
const router = express.Router()

const Author = require('./../models/Author.js');
const Cookbook = require('./../models/Cookbook.js');


//Write the route to list all authors
router.get('/', async (req,res) =>{
    const authors = await Author.find({}).populate('cookbooks');
    res.json({
        status: 200,
        data: authors
    });
})


// Write the route to get authors by firstname
router.get('/:firstName', async (req,res) =>{
    const author = req.body;
    const authors = await Author.find({firstName: req.params.firstName}).populate('cookbooks');
    res.json({
        status: 200,
        data: authors
    });
})
//Write the route to create an author:
router.post('/', async (req,res)=>{
   
    const cookbook = await Cookbook.create({
        title: req.body.title,
        yearPublished: req.body.yearPublished
    })
    const author = await Author.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        cookbooks: cookbook._id
    });
    res.json({
        status:200,
        data: author
    });
})
// Write the route to update an author
router.put('/:id', async(req,res)=>{
    const updatedAuthor = await Author.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                firstName: req.body.firstName,
                lastName:req.body.lastName,
                cookbooks: req.body.cookbooks
            }
        },
        {new:true}
    );
    res.json({
        status: 200,
        data: updatedAuthor
    })
})

router.delete('/remove/:id', async (req,res)=>{
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    res.json({
        status: 200,
        author: `Deleted author: ${deletedAuthor}`
    })
})

// Update the cookbook using Postman.

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)
// router.delete('/cookbook/:authorName', async (req,res)=>{
//     const 
// })

module.exports = router