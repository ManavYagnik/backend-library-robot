const express = require('express');
// const Model_Products = require('../models/model_products');
// const Model_Contacts = require('../models/model_contacts');
const Model_Books = require('../models/model_books');
const router = express.Router();



router.post('/books/post', async (req, res) => {
    const data1 = new Model_Books({
       

        bookname:req.body.bookname,
        authorname:req.body.authorname,
        bookid:req.body.bookid, 
        status:req.body.status,
      
   
    })

    try {
        const dataToSave = await data1.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/books', async (req, res) => {
    try {
        const data = await Model_Books.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
// router.get('/contacts/:id', async (req, res) => {
//     try {
//         const data = await Model_Contacts.findById(req.params.id);
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })



// router.get('/contacts/cateogry', async (req, res) => {
//     try {
//         const data = await Model_Contacts.findById(req.params.id);
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })




//Update by ID Method
router.patch('/books/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model_Books.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Delete by ID Method
router.delete('/books/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model_Books.findByIdAndDelete(id)
        res.send(`Document with ${data.bookname} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})











module.exports = router;