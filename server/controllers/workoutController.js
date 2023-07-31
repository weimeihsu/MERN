const workoutSchema = require('../models/workoutModel')
const mongoose = require('mongoose')
// get all items
const getAllWorkouts = async(req, res)=>{
    const workouts = await workoutSchema.find({}).sort({createdAt: -1})
    
    res.status(200).json(workouts)
}
// get a single item
const getSingleWorkout = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleWorkout = await workoutSchema.findById(id)

    if(!singleWorkout){
        return res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(singleWorkout)
}
// create a new item
const createWorkout = async(req, res) =>{

    const {title, load} = req.body
    // add item to mongodb
    try{
        const workout = await workoutSchema.create({title, load})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error:error.message})
    }
}
// delete a single item
const deleteSingleWorkout = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const singleWorkout = await workoutSchema.findOneAndDelete({_id:id})

    if(!singleWorkout){
        return res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(singleWorkout)
}

// update a signle item
const updateSingleWorkout = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const singleWorkoutUpdate = await workoutSchema.findOneAndUpdate({_id:id}, {...req.body})

    if(!singleWorkoutUpdate){
        return res.status(404).json({error: 'no such workout'})
    }
    res.status(200).json(singleWorkoutUpdate)
}
module.exports = {
    createWorkout, getSingleWorkout, getAllWorkouts, deleteSingleWorkout, updateSingleWorkout
}