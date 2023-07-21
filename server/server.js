require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.get('/', (req, res)=>{
    res.send('Hellow World!!')
})
app.get('/api',(req,res)=>{
    res.json({"users":['userOne', 'userTwo', 'userThreee']})
})
// listen for request
app.listen(process.env.PORT,()=>{ console.log('Server started on port 5000')})

