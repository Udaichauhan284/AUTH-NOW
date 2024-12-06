import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv";
dotenv.config();
/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = process.env.MAILTRAP_TOKEN;
const SENDER_EMAIL = "hello@demomailtrap.com"
//const RECIPIENT_EMAIL = "udaichauhan284@gmail.com";

export const mailtrapClient = new MailtrapClient({ token: TOKEN });

export const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

// client
//   .send({
//     from: sender,
//     to: [{ email: RECIPIENT_EMAIL }],
//     subject: "Hello from Mailtrap!",
//     text: "Welcome to Mailtrap Sending!",
//   })
//   .then(console.log)
//   .catch(console.error);