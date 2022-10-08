const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload=require("express-fileupload");
const path=require('path');

dotenv.config();

const app = express();

//middleware: which has access in the all app
app.use(express.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles:true
}))

//connect ot mongo db
const URI = process.env.MONGO_URI;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
  },(err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to mongo db");
    }
  }
);

/**  *****This will show use on the localhost:5000
app.get('/',(req,res)=>{
    res.send("hello from server");
});
*/

//create routes 
app.use("/contact",require("./routes/contactRoute"))
app.use("/user",require("./routes/userRoute"))
app.use("/",require("./routes/aboutRoute"));
app.use("/",require("./routes/eduRoute"));
app.use("/",require("./routes/expRoute"));
app.use("/",require("./routes/projectRoute"))
app.use("/",require("./routes/uploadRoute"))

const PORT_value = process.env.PORT || 5002;

//static assets
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}

app.listen(PORT_value, () => {
  console.log("server is listening on port", PORT_value);
});
