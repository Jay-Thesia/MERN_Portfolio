const nodemailer = require("nodemailer");
const {google}=require("googleapis")


exports.getMail = (req, res) => {
  try {
    res.send("contacted");
  } catch (error) {
    return res.status(500).json({ msg: "server problem" });
  }
};

let oAuth2Client=new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,'https://developers.google.com/oauthplayground')
oAuth2Client.setCredentials({refresh_token:process.env.CLIENT_REFRESH_TOKEN})

exports.sendMail =async (req, res) => {
  //smtp simple mail transfer procol use for transporting mail every email providors support it

  let data = req.body;
 

  const accessToken=await oAuth2Client.getAccessToken()

  let smtpTransport = nodemailer.createTransport({
    service: "gmail",

    //the port of connect
    port: 465,

    //for authenticate
    auth: {
        type:"OAuth2",
        user: "jayengineer.jp2410@gmail.com",
        // password: "jay9974967074",
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        refreshToken:process.env.CLIENT_REFRESH_TOKEN,
        accessToken:accessToken
        
    },
  });

  let mailOptions = {
    from:data.email,
    to: "jayengineer.jp2410@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
            <h3>Information</h3>
            <ul>
                <li>Name:${data.name}</li>
                <li>Email:${data.email}</li>
            </ul>
    
            <h3>Message</h3>
            <p>${data.message}</p>
        `,
  };

  smtpTransport.sendMail(mailOptions, (err, response) => {
    try {
      if (err) return res.status(400).json({ msg: err.message });
      else return res.status(200).json({ msg: "Mail is send" });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  });
};
