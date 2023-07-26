const express = require('express')

const router = express.Router()

// GET all items
router.get('/', (req, res)=>{
    res.json({mssg:'get all items'})
})

// GET a single items
router.get('/:id', (req, res)=>{
    res.json({mssg:'get a single item'})
})

// POST a new item
router.post('/', (req, res)=>{
    res.json({mssg:'post a new workout'})
})

// DELETE a single items
router.delete('/:id', (req, res)=>{
    res.json({mssg:'delete a single item'})
})

// UPDATE a single items
router.patch('/:id', (req, res)=>{
    res.json({mssg:'patch a single item'})
})

module.exports = router