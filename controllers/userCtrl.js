const userSchema = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

//register

//other way to write like json

/** 
const userctrl={
addRegister:async(req,res)=>{
    await res.send('registered');
    ...other code
}
}
*/

exports.addRegister = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = await userSchema.findOne({
      email,
    });

    if (user) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    //create the big password and then update the schema

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new userSchema({
      username,
      email,
      password: passwordHash,
    });

    await newUser.save();
    res.json({ msg: "User is registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "server problem" });
  }
};

//other way to write like json

/** 
const userctrl={
addRegister:async(req,res)=>{
    await res.send('registered');
}
}
*/

//login
exports.loginRegistered = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({ msg: "User is not Registered" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Password" });
    }

    //if login is successful
    const payload = {
      id: user._id,
      name: user.username,
    };

    //make token
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    return res.json({token});
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

//verify
exports.verifyRegistered =  (req, res) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.send(false);
    }

    jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
      if (err) return res.send(false);

      const user = await userSchema.findById(verified.id);

      if (!user) return res.send(false);

      return res.send(true)
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
