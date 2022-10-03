const router = require('express').Router();
const {getExperience,addExperience,getExperienceId,updateExperienceById,deleteExperienceById}=require("../controllers/expCtrl");


//......... Experience section .......

//get request for experience
router.get("/experience",getExperience);

//add experience 
router.post("/experience", addExperience);

//get specific experience by id
router.get("/experience/:id",getExperienceId );

//update specific experience by id
router.put("/experience/update/:id", updateExperienceById);

//delete specific experience by id
router.delete("/experience/:id", deleteExperienceById);

module.exports = router;


