const mongoose = require ('mongoose')



const projectSchema = new mongoose.Schema({

projectName : {
    type : String,
    required : true
},
projectId : {
    type : String,
    required : true
},
projectDescription : {
    type : String,
    required : true
},
projectUsers : {
    type : String,
    required : true
},
projectAdmin : {
    type : String,
    required : true
},
projectContent : [{ 
    contentId : String,
    type : String,
    createdBy : String,
    title : String,
    description : String,
    content : [] 
   }]

});

const ProjectModel = mongoose.model('ProjectModel', projectSchema);

module.exports = ProjectModel;