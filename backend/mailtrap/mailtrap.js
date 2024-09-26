import { MailtrapClient, MailtrapTransport } from "mailtrap";
import Nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log({ token: process.env.MAILTRAP_TOKEN });

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: process.env.MAILTRAP_TOKEN,
  })
);

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Ngesa",
};
