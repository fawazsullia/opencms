const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')


app.use(express.json())
//imports
const authRoutes = require('./routes/profileRoutes/authentication')

//constants
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;

//middlewares

app.use(cors())

//route middlewares
app.use('/auth', authRoutes)





//listening server

app.listen(PORT, async ()=> {
    console.log("Server started")
try{
await mongoose.connect( URI , { useNewUrlParser: true, useUnifiedTopology: true })
console.log("Database connected")
}
catch(e){
    console.log(e)
}

})