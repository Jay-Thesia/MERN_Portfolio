const projectSchema = require("../model/projectModel");

//get project
exports.getProject = async (req, res) => {
  try {
    const projectV = await projectSchema.find(req.body);
    res.json(projectV);
  } catch (error) {
    res.status(500).json({ message: error.message + "server problem" });
  }
};

//add project
exports.addProject = async (req, res) => {
  //link add
  const { project_id, title, description, link, images } = req.body;
  try {
    const newProject = await projectSchema({
      project_id,
      title,
      description,
      link,
      images,
    });

    await newProject.save();
    res.json({ msg: "new project is added" });
  } catch (err) {
    res.status(500).json({ message: err + "server problem" });
  }
};

//get specific project by id(get)
exports.getProjectId = async (req, res) => {
  try {
    const projectId = await projectSchema.findById(req.params.id);
    res.json(projectId);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update user by id (put)
exports.updateProjectById = async (req, res) => {
  //res.send("update user by id " + req.params.id);
  const { project_id, title, description, link, images } = req.body;
  try {
    const newProject = await projectSchema.findByIdAndUpdate(req.params.id, {
      project_id,
      title,
      description,
      link,
      images,
    });

    await newProject.save();

    res.json({ msg: "Updated Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete user by id (delete)
exports.deleteProjectById = async (req, res) => {
  // res.send("delete user by id ");

  try {
    const newProject = await projectSchema.findByIdAndDelete(req.params.id);

    res.json({ msg: "Deleted Successfully" });
  } catch (err) {
    res.status(5000).json({ msg: "server problem" });
  }
};
