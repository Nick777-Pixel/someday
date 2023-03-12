const sdk = require("node-appwrite");
const mailer = require("sib-api-v3-sdk");
module.exports = async function (req, res) {
  mailer.ApiClient.instance.authentications['api-key'].apiKey =  req.variables.SENDINBLUE
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
  const message = `
  <html>
  <body>
    <h1>Hi,</h1>
    <p>Somebody just left you a message on <a>someday</a></p>
    <p>Here is the message:</p>
  </body>
  </html>
  `
  new mailer.TransactionalEmailsApi().sendTransacEmail(
    {
      'subject':'You got a Someday message!',
      'sender' : {'email':'mail@hosenur.tech', 'name':'someday'},
      'replyTo' : {'email':'mail@hosenur.tech', 'name':'someday'},
      'to' : [{'name': 'John Doe', 'email':'nur08439@gmail.com'}],
      'htmlContent' : message,
      'params' : {'bodyMessage':'Made just for you!'}
    }
  )

  res.json({
    areDevelopersAwesome: true,
  });
};
