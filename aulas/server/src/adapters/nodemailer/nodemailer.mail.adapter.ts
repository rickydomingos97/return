import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c64f1c6522ae35",
      pass: "663cc6b19724c7"
    }
  });


export class NodeMailerAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Ricardo Domingos <ricardodomingos97@gmail.com>',
            subject,
            html: body,
            ].join('\n')
        })
    };
}