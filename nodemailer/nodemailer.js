const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.lastName}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

  let transporter = nodemailer.createTransport({
    host: "mail.anastasios-arvanitis.info",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "contact@anastasios-arvanitis.info", // generated ethereal user
      pass: "#~.EhenZKjsw", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: '"Contact Form" <contact@anastasios-arvanitis.info>', // sender address
    to: "contact@anastasios-arvanitis.info", // list of receivers
    subject: "Contact Form Email", // Subject lin
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    /* console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
 */
  });
});

app.listen(PORT, () => console.log(`Server started at port... ${PORT}`));
