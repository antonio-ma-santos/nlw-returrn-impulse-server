import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapaters";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "41c34dcc26534e",
    pass: "498002b66d8ac4"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Antonio Marcelino <marcelino_green@hotmail.com>',
      subject,
      html: body,
    });
  }
}