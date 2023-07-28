require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const workoutRoutes = require('./routes/workouts')

app.use(cors({
    origin: 'http://localhost:5173'
}))

// routes
app.use('/api/workouts', workoutRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for request
        app.listen(process.env.PORT,()=>{ console.log('Connect to DB and listen to port '+process.env.PORT )})
    })
    .catch((error)=>{
        console.log(error)
    })




