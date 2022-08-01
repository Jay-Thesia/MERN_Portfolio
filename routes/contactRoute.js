const router = require("express").Router();
const {getMail,sendMail}=require("../controllers/contactCtrl")

router.get("/", getMail);

router.post("/", sendMail);

module.exports = router;
