const sdk = require("node-appwrite");
const mailer = require("sib-api-v3-sdk");
module.exports = async function (req, res) {
  mailer.ApiClient.instance.authentications["api-key"].apiKey =
    req.variables.SENDINBLUE;
  const client = new sdk.Client();
  // You can remove services you don't use
  const account = new sdk.Account(client);
  const avatars = new sdk.Avatars(client);
  const database = new sdk.Databases(client);
  const functions = new sdk.Functions(client);
  const health = new sdk.Health(client);
  const locale = new sdk.Locale(client);
  const storage = new sdk.Storage(client);
  const teams = new sdk.Teams(client);
  const users = new sdk.Users(client);
  const message = `
  <html>
    <body>
      <p>Hi</p>
      <p>You got a someday message from Nur, but wait, you cant just open and view it now. The sender has set a time in the future and when it's time we will deliver it to you at midnight</p>
    </body>
  </html>
  `;

  if (
    !req.variables["APPWRITE_FUNCTION_ENDPOINT"] ||
    !req.variables["APPWRITE_FUNCTION_API_KEY"]
  ) {
    console.warn(
      "Environment variables are not set. Function cannot use Appwrite SDK."
    );
  } else {
    client
      .setEndpoint(req.variables["APPWRITE_FUNCTION_ENDPOINT"])
      .setProject(req.variables["APPWRITE_FUNCTION_PROJECT_ID"])
      .setKey(req.variables["APPWRITE_FUNCTION_API_KEY"])
      .setSelfSigned(true);
  }
  new mailer.TransactionalEmailsApi().sendTransacEmail({
    subject: "You got a Someday message!",
    sender: { email: "mail@hosenur.tech", name: "someday" },
    replyTo: { email: "mail@hosenur.tech", name: "someday" },
    to: [{ name: "John Doe", email: "nur08439@gmail.com" }],
    htmlContent: message,
  });

  res.json({
    areDevelopersAwesome: true,
  });
};
