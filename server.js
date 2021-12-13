const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')


//imports
const authRoutes = require('./routes/profileRoutes/authentication')
const profileRoutes = require('./routes/profileRoutes/editProfile')
const projectRoutes = require('./routes/projectRoutes/projectRoutes')
const textContentRoutes = require('./routes/contentRoutes/textRoutes')

//constants
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;

//middlewares
app.use(express.json())


app.use(cors())

//route middlewares
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
app.use('/project', projectRoutes)
app.use('/text', textContentRoutes)





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