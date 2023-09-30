require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const siteRoutes = require('./routes/siteRoutes')
const domainRoutes = require('./routes/domainRoutes')
const recordRoutes = require('./routes/recordRoutes')

const app = express()
const PORT = process.env.PORT
// middleware. this will look into the requst body and parsin json format
app.use(express.json())

// routes
app.use('/api/records', recordRoutes)
app.use('/api/sites', siteRoutes)
app.use('/api/domains', domainRoutes)

// connect to mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for request
        app.listen(PORT,()=>{ console.log('Connect to DB and listen to port '+ process.env.PORT )})
    })
    .catch((error)=>{
        console.log(error)
    })




