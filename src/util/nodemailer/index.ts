import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const OAuth2_client = new OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET
);
OAuth2_client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

const mail = (
  serviceEmail: string,
  {
    recipient,
    subject,
    html,
  }: { recipient: string; subject: string; html: string }
) =>
  new Promise((resolve, reject) => {
    const accessToken = OAuth2_client.getAccessToken().catch((error) => {
      // console.log(error);
    });

    const transport = nodemailer.createTransport({
      service: "",
      auth: {
        type: "OAuth2",
        user: process.env.OAUTH_ENGPOT_EMAIL,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        // accessToken: accessToken,    // todo resolve this issue with service and accessToken
      },
    });

    const emailOptions = {
      from: `EngPot English <${process.env.OAUTH_ENGPOT_EMAIL}>`, // todo will be adjustable
      to: recipient,
      subject: subject,
      html: html,
    };

    transport.sendMail(emailOptions, (error, result) => {
      if (error) {
        console.log("Nodemailer Error: ", error);
        transport.close();
        resolve(false);
      } else {
        console.log("Email sent: ", result);
        transport.close();
        resolve(true);
      }
    });
  });

export default mail;
