//need to check who created the content
// create the url that will fetch the content. with an id maybe?
// domain/projectid/text/contentid

const express = require('express')
const router = express.Router()
const ProjectModel = require('../../models/projectModel')
const mongoose = require('mongoose')


//* create a new text content

router.post('/create', async (req, res) => {

const { projectId, content, title, description, userName  } = req.body


//create the schema for content in the project

const id = new mongoose.Types.ObjectId()
const url = `http://localhost:5000/text/${projectId}/${id}`

const reqContent = {
    contentId : id,
    type : "text",
    createdBy : userName,
    title : title,
    description : description,
    content : { text : content  },
    url : url
}

//update the project to add the text content
try{
await ProjectModel.findOneAndUpdate( { projectId : projectId}, { $push : { projectContent : [reqContent]  } })
await res.status(200).json({ message : "Successfully created"}).end()
}
catch(e){
    console.log(e)
    res.status(500).json({message : "Something went wrong"}).end()
}

})



module.exports = router