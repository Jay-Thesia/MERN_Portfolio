const nodemailer = require("nodemailer");

exports.getMail=(req, res) => {
    try {
      res.send("contact");
    } catch (error) {
      return res.status(500).json({ msg: "server problem" });
    }
  };

exports.sendMail=(req, res) => {
    //smtp simple mail transfer procol use for transporting mail every email providors support it
  
    let smtpTransport = nodemailer.createTransport({
      service: "Gmail",
  
      //the port of connect
      port: 465,
  
      //for authenticate
      auth: {
        user: "jayengineer.jp2410@gmail.com",
        pass: "jay9974967074",
      },
    });
  
    let mailOptions = {
      from: data.email,
      to: "jayengineer.jp2410@gmail.com",
      subject: "Message from   ${data.name}",
      html: `
            <h3>Information</h3>
            <ul>
                <li>Name:${data.name}</li>
                <li>Name:${data.email}</li>
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