const mongoose=require("mongoose");

const expSchema=new mongoose.Schema({

    expValue:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model("Experience",expSchema);