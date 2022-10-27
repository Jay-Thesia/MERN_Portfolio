const router = require("express").Router();
const{postImage,deleteImage}=require("../controllers/uploadCtrl")

//we will upload project image to cloudinary

//post upload image
router.post("/upload", postImage);

//delete the image
router.post("/destroy", deleteImage);


module.exports = router;

//do git push by making uploadctrl and cut this logic and paste it there ...................................................