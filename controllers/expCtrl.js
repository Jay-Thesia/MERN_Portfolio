const expSchema=require("../model/expModel");



//get experience user(get)
exports.getExperience = async (req, res) => {
    //res.send("experience page");
  
    //need all the data from the experienceschema
    //case one using async await
  
    try {
      const expV = await expSchema.find();
      res.json(expV);
    } catch (error) {
      res.status(500).json({ message: error.message + "server problem" });
    }
  
    /** case two using promises
    experienceSchema.find()
    .then(experienceV =>res.json(experienceV))
    */
  };
  
  //add experience user(post)
  exports.addExperience = async (req, res) => {
    // res.send("post add user");
  
    //show the data
    const { expValue } = req.body;
  
    try {
      const newExperience = await expSchema({
        expValue,
      });
  
      await newExperience.save();
      res.json(newExperience);
    } catch (err) {
      res.status(500).json({ message: err.message + "server problem" });
    }
  };
  
  //get specific user by id(get)
  exports.getExperienceId = async (req, res) => {
    //res.send("post add user by id " + req.params.id);
  
    try {
      const expId = await expSchema.findById(req.params.id);
      res.json(expId);
    } catch (err) {
      res.status(500).json({ message: error.message });
    }
  };
  
  //update user by id (put)
  exports.updateExperienceById = async (req, res) => {
    //res.send("update user by id " + req.params.id);
    const { expValue } = req.body;
    try {
     
      const newExperience = await expSchema.findByIdAndUpdate(req.params.id, {
        expValue,
      });
  
      await newExperience.save();
  
      res.json({msg: 'updated successfully'});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  //delete user by id (delete)
  exports.deleteExperienceById = async (req, res) => {
   // res.send("delete user by id ");
  
   
   try{
    const newExperience=await expSchema.findByIdAndDelete(req.params.id);
    res.json({msg: 'deleted successfully'});
   }catch(err){
    res.status(5000).json({msg:"server problem"});
   }
  };
  