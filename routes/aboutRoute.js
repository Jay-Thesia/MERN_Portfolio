/*
    here 
*/

const router = require("express").Router();

const {getAbout,addAbout,getAboutId,updateAboutById, deleteAboutById}=require('../controllers/aboutCtrl.js');

//......... about section .......

//get request for about
router.get("/about",getAbout);

//add about user
router.post("/about", addAbout);

//get specific user by id
router.get("/about/:id",getAboutId );

//update specific user by id
router.put("/about/update/:id", updateAboutById);

//delete specific user by id
router.delete("/about/:id", deleteAboutById);

module.exports = router;
