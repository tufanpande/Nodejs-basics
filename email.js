const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "tufanpande@gmail.com",
    pass: "ahek bpqi lfci cdbr",
  },
});
// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error.response);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    
    from: '"Everest Engineering College" <everest @eemc.edu>', 
    to: "tufan.pandey@eemc.edu.np", 
    subject: "Result?", // Subject line  
    text: "", 
    html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',
    attachments: [{
        filename: 'google.png',
        path: './google.png',
        cid: 'unique@nodemailer.com' //same cid value as in the html img src
    },
  {   // file on disk as an attachment
    filename: 'tufan.jpeg',
    path: "C:/Users/tufan/OneDrive/Desktop/tufan.jpeg" // stream this file
},
],
  });

 
  console.log("Message sent: %s", info.messageId);
 
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
 }
main().catch(console.error);