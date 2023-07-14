const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wsite404@gmail.com",
    pass: "fuliicgwznfekqpg",
  },
});

exports.sendMail = async function main(data) {
  const info = await transporter.sendMail({
    from: `"Portfolio ${data.email}`, 
    to: "harshitpahuja953@gmail.com", // list of receivers
    subject: "Portfolio", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Name : </b> <span>${data.name}<span/> <br/>
    <b>Email : </b> <span>${data.email}<span/> <br/>
    <b>Subject : </b> <span>${data.subject}<span/> <br/>
    <b>Message : </b> <span>${data.message}<span/> <br/>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
}
