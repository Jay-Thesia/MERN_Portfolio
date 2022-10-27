
const router = require("express").Router();
const {getEducation,addEducation,getEducationId,updateEducationById,deleteEducationById}=require("../controllers/eduCtrl.js");


//......... Education section .......

//get request for education
router.get("/education",getEducation);

//add education 
router.post("/education", addEducation);

//get specific education by id
router.get("/education/:id",getEducationId );

//update specific education by id
router.put("/education/update/:id", updateEducationById);

//delete specific education by id
router.delete("/education/:id", deleteEducationById);

module.exports = router;
