const mongoose = require ('mongoose')



const userSchema = new mongoose.Schema({

userName : { type : String, required : true },
userEmail : {  type :  String, required : true},
userId : {type : String, required : true},
projects : [String]

});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;