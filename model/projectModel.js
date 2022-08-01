const mongoose=require('mongoose');

const projectSchema=mongoose.Schema({

    project_id:{
        type:String,
        unique:true,
        required:true
    },

    title:{
        type:String,
        trim:true,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    images:{
        type:Object,
        required:true
    },

    link:{
        type:String
    }

});

module.exports=mongoose.model("Projects",projectSchema)