//change name, email etc

const express = require('express')
const router = express.Router()
const UserModel = require('../../models/userModel')

//* edit profile

router.put('/editprofile', async (req, res)=> {

const data = req.body

try{
await UserModel.findOneAndUpdate({ userId : data.userId }, data)
await res.status(200).json({message : "Updated successfully"}).end()
}
catch(e){
res.status(500).json({message : "Something went wrong"}).end()
}

})




module.exports = router