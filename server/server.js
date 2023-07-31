require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const workoutRoutes = require('./routes/workoutRoutes')

// app.use(cors({
//     origin: 'http://localhost:5173'
// }))
// express app
const app = express()

// middleware. this will look into the requst body and parsin json format
app.use(express.json())

// routes
app.use('/api/workouts', workoutRoutes)

// connect to mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for request
        app.listen(process.env.PORT,()=>{ console.log('Connect to DB and listen to port '+process.env.PORT )})
    })
    .catch((error)=>{
        console.log(error)
    })




