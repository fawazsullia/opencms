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
const url = `http://localhost:5000/text/${id}`

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
const project = await ProjectModel.findOne({projectId : projectId})
if(project){

await ProjectModel.findOneAndUpdate( { projectId : projectId}, { projectContent : {[id] : reqContent}   })
await res.status(200).json({ message : "Successfully created"}).end()

}
else { res.status(400).json({message : "Project not found"}).json()  }

}
catch(e){
    console.log(e)
    res.status(500).json({message : "Something went wrong"}).end()
}

})

//* access the text content 
//this is queried and only gives back th eactual content

router.get('/:projectId/:contentId', async (req, res)=>{

const { projectId , contentId } = req.params
try{
const project = await ProjectModel.findOne({ projectId : projectId } , `projectContent`   )






if(project){
    const proContent = project.projectContent
const content = proContent[contentId].content
    await res.status(200).json(content).end()
}
else {await res.status(400).json({message : "Project Not found"}).end() }
}
catch(e){
res.status(500).json({message : "something went wrong"}).end()
}

})



module.exports = router