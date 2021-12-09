//register, login
const express = require('express')
const router = express.Router()
const UserModel = require('../../models/userModel')

// *register a new account
router.post('/register', async (req, res)=> {

const { userName, userId, userEmail } = req.body

const newUser = new UserModel({

userName : userName,
userId : userId,
userEmail : userEmail,
projects : []

})

try{
await newUser.save();
await res.status(200).json({message : "Successful"}).end()

}
catch(e){
res.status(500).json({message : "Something went wrong"}).end()
}


})

module.exports = router