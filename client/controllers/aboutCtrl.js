const aboutSchema = require("../model/aboutModel.js");

//get about user(get)
exports.getAbout = async (req, res) => {
  //res.send("about page");

  //need all the data from the aboutschema
  //case one using async await

  try {
    const aboutV = await aboutSchema.find();
    res.json(aboutV);
  } catch (error) {
    res.status(500).json({ message: error.message + "server problem" });
  }

  /** case two using promises
  aboutSchema.find()
  .then(aboutV =>res.json(aboutV))
  */
};

//add about user(post)
exports.addAbout = async (req, res) => {
  // res.send("post add user");

  //show the data
  const { aboutValue } = req.body;

  try {
    const newAbout = await aboutSchema({
      aboutValue,
    });

    await newAbout.save();
    res.json(newAbout);
  } catch (err) {
    res.status(500).json({ message: err.message + "server problem" });
  }
};

//get specific user by id(get)
exports.getAboutId = async (req, res) => {
  //res.send("post add user by id " + req.params.id);

  try {
    const aboutId = await aboutSchema.findById(req.params.id);
    res.json(aboutId);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update user by id (put)
exports.updateAboutById = async (req, res) => {
  //res.send("update user by id " + req.params.id);
  const { aboutValue } = req.body;
  try {
   
    const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {
      aboutValue,
    });

    await newAbout.save();

    res.json({msg: 'Updated Successfully'});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete user by id (delete)
exports.deleteAboutById = async (req, res) => {
 // res.send("delete user by id ");

 
 try{
  const newAbout=await aboutSchema.findByIdAndDelete(req.params.id);
  res.json({msg: 'Deleted Successfully'});
 }catch(err){
  res.status(5000).json({msg:"server problem"});
 }
};
