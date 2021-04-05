const mongoose = require('mongoose');

var schema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    programming:String,
    design:String,
    skills:String,
    status:String,
    description:String
    

})

const Userdb=mongoose.model('userdb',schema);
module.exports=Userdb;
