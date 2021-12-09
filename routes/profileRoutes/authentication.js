//register, login
// what if they enter wrong details?
//
const express = require('express')
const router = express.Router()
const UserModel = require('../../models/userModel')

//* register a new account

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


//* login to an existing account

router.post('/login', async (req, res)=> {

const { userId } =  req.body

try{

const data = await UserModel.findOne({ userId : userId })

if(data){
    await res.status(200).json(data).end()
}
else{
    await res.status(400).json({message : "No such user found"}).end()
}

}
catch(e){
    console.log(e)
    res.status(500).json({message : "Something went wrong"}).end()
 }

})

module.exports = router