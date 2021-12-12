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

const user = await UserModel.findOne({ userId : projectAdmin })

if(user){
    const data = await newProject.save()
    await res.status(200).json({ projectId : data.projectId }).end()
}
else {
    await res.status(400).json({message : "No user found, please login"}).end()
}
    
}
catch(e){
res.status(500).json({message : "Something went wrong"}).end()
}

})

//* delete the project
router.delete('/del/:id', async (req, res)=> {

    const projectId = req.params.id
    try{
        const random = await ProjectModel.findOne({projectId : projectId})
        if(random){
        await ProjectModel.findOneAndDelete({ projectId : projectId })
        await res.status(200).json({message : "Deleted successfully"}).end()
        }
        else {
            res. status(400).json({message : "Project not found"}).end()
        }
        
    }
    catch(e){
        res.status(500).json({message : "Something went wrong"}).end()
    }
})





module.exports = router