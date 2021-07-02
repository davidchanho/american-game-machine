import nodemailer from "nodemailer";

export default async function (req, res) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: `${req.body.name} <${req.body.email}>`,
    to: "contact@empire-amusement.com",
    subject: req.body.subject,
    text: req.body.message,
    html: req.body.html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  console.log(req.body);
}
