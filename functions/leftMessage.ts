const mailer = require("@sendgrid/mail");
mailer.setApiKey(process.env.SENDGRID_API_KEY);
const mail = {
  to: "nur08439@gmail.com",
  from: "mail@nur.codes",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
mailer.send(mail);