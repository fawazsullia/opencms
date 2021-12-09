const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const ProjectModel = require('../../models/projectModel')
const UserModel = require('../../models/userModel')


//* create a new project
router.post('/create', async (req, res)=> {

const { projectName, projectDescription, projectAdmin  } = req.body    

const newProject = new ProjectModel({
projectId : new mongoose.Types.ObjectId().toHexString(),
projectName : projectName,
projectDescription : projectDescription,
projectUsers : [projectAdmin],
projectAdmin : projectAdmin,
projectContent : []
})

try{

const data = await newProject.save()
await res.status(200).json({ projectId : data.projectId }).end()
    
}
catch(e){
res.status(500).json({message : "Something went wrong"}).end()
}

})





module.exports = router