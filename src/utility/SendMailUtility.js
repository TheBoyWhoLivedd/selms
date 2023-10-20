//External Lib Import
const nodemailer = require("nodemailer");

const SendMailUtility = async (emailTo, emailText, emailSubject) => {
  let transporter = await nodemailer.createTransport({
    name: "mail.privateemail.com",
    host: "mail.privateemail.com",
    port: 25,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOption = {
    from: `${process.env.APPLICATION_NAME} <contact@hitajitech.site>`,
    to: emailTo,
    subject: emailSubject,
    html: emailText,
  };

  return await transporter.sendMail(mailOption);
};

module.exports = SendMailUtility;
