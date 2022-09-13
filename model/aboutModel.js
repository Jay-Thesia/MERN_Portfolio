const mongoose=require("mongoose");

const aboutSchema =new mongoose.Schema({
  
    //mongoose take key value pair here about is the key and the value which we will get from the user it's type is string
    aboutValue:{
        type:String,
        required:true
    }

    
})

module.exports=mongoose.model("About",aboutSchema);