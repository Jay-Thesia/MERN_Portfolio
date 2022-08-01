const router = require('express').Router();
const {getProject,addProject,getProjectId,updateProjectById,deleteProjectById}=require("../controllers/projectCtrl");


//......... Project section .......

//get request for project
router.get("/project",getProject);

//add project 
router.post("/project", addProject);

//get specific project by id
router.get("/project/:id",getProjectId );

//update specific project by id
router.put("/project/update/:id", updateProjectById);

//delete specific project by id
router.delete("/project/:id", deleteProjectById);

module.exports = router;


