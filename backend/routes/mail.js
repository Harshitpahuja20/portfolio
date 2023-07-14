const { sendMail } = require("../mail.config");

module.exports = (app) => {
  app.post("/sendMessage", async (req, res) => {
    const { name, email, subject, message } = req.body;
    if (name && email && message) {
      const data = {
        name: name,
        email: email,
        subject: subject || "",
        message: message,
      };
      await sendMail(data)
        .then(() => {
          return res.status(200).send({msg : "message sent" , status : true})
        })
        .catch((error) => {
          return res.status(200).send({msg : error , status : false});
        });
    }else{
        return res.status(200).send({msg : "Something went wrong" , status : false});
    }
  });
};
