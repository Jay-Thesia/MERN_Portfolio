const eduSchema=require("../model/eduModel");



//get education user(get)
exports.getEducation = async (req, res) => {
  //res.send("education page");

  //need all the data from the educationschema
  //case one using async await

  try {
    const eduV = await eduSchema.find();
    res.json(eduV);
  } catch (error) {
    res.status(500).json({ message: error.message + "server problem" });
  }

  /** case two using promises
  educationSchema.find()
  .then(educationV =>res.json(educationV))
  */
};

//add education user(post)
exports.addEducation = async (req, res) => {
  // res.send("post add user");

  //show the data
  const { eduValue } = req.body;

  try {
    const newEducation = await eduSchema({
      eduValue,
    });

    await newEducation.save();
    res.json(newEducation);
  } catch (err) {
    res.status(500).json({ message: err.message + "server problem" });
  }
};

//get specific user by id(get)
exports.getEducationId = async (req, res) => {
  //res.send("post add user by id " + req.params.id);

  try {
    const eduId = await eduSchema.findById(req.params.id);
    res.json(eduId);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

//update user by id (put)
exports.updateEducationById = async (req, res) => {
  //res.send("update user by id " + req.params.id);
  const { eduValue } = req.body;
  try {
   
    const newEducation = await eduSchema.findByIdAndUpdate(req.params.id, {
      eduValue,
    });

    await newEducation.save();

    res.json({msg: 'updated successfully'});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete user by id (delete)
exports.deleteEducationById = async (req, res) => {
 // res.send("delete user by id ");

 
 try{
  const newEducation=await eduSchema.findByIdAndDelete(req.params.id);
  res.json({msg: 'deleted successfully'});
 }catch(err){
  res.status(5000).json({msg:"server problem"});
 }
};
