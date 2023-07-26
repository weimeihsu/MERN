require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const workoutRoutes = require('./routes/workouts')

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use('/api/workouts', workoutRoutes)

app.get('/api',(req,res)=>{
    res.json({"users":['userOne', 'userTwo', 'userThreee']})
})
// listen for request
app.listen(process.env.PORT,()=>{ console.log('Server started on port '+process.env.PORT )})

