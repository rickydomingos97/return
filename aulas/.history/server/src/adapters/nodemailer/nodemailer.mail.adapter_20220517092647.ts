import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "54bbdd55f740c7",
    pass: "7263e0f7ce4284"
  }
});
export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'John Doe <john.doe@fakemail.com>',
            subject,
            html: body,
        })
    };
}
  /**
* export class NodemailerMailAdapter implements MailAdapter {
async sendMail: (data: SendMailData) => void;({ subject, body }: SendMailData) {
  await transport.sendMail({
  from: 'Equipe Feedget <oi@feedget.com>',
  to: 'John Doe <john.doe@fakemail.com>',
  subject,
  html: body,
});
}
}
*/

/**
 * import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c64f1c6522ae35",
    pass: "663cc6b19724c7"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail: (data: SendMailData) {

  };
}
 */