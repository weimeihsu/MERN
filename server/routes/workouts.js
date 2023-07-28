const express = require('express')
const Workout = require('../models/workoutModel')
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
const workout = new Workout({
    title: "title",
    load:0
})
router.post('/', async (req, res)=>{
    const title = req.body

    try{
        const workout = await Workout.create({title})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error:error.message})
    }
    
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