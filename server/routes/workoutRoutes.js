const express = require('express')
const {createWorkout, getSingleWorkout, getAllWorkouts, deleteSingleWorkout, updateSingleWorkout} = require('../controllers/workoutController')
const router = express.Router()

// GET all items
router.get('/', getAllWorkouts)

// GET a single items
router.get('/:id', getSingleWorkout)

// POST a new item
router.post('/', createWorkout)

// DELETE a single item
router.delete('/:id', deleteSingleWorkout)

// UPDATE a single item
router.patch('/:id', updateSingleWorkout)

module.exports = router