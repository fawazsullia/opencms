const mongoose = require ('mongoose')



const projectSchema = new mongoose.Schema({

projectName : {
    type : String,
    required : true
},
projectId : String,
projectDescription : {
    type : String,
    required : true
},
projectUsers : [],
projectAdmin : {
    type : String,
    required : true
},
projectContent : {}

});

const ProjectModel = mongoose.model('ProjectModel', projectSchema);

module.exports = ProjectModel;