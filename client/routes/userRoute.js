const router=require('express').Router();

const {addRegister,loginRegistered,verifyRegistered}=require('../controllers/userCtrl')
const auth=require("../middlewares/auth");
//register
router.post('/register', addRegister);

//login
router.post('/login', loginRegistered);

//verify
router.get('/verify', verifyRegistered);

module.exports=router;