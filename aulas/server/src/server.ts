import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c64f1c6522ae35",
      pass: "663cc6b19724c7"
    }
  });


app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type: type,
            comment: comment,
            screenshot: screenshot,
        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Ricardo Domingos <ricardodomingos97@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-family: 16px; color: #111; ">`,
            `<p>Tipo do feedback ${type}</p>`,
            `<p>Comentario ${comment}</p>`,
            `</div>`
        ].join('\n')
    })

    return res.status(201).json({ data: feedback });
})

app.listen(3333, () => {
    console.log('HTTP o servidor esta rodando')
});



// GET - buscar infos
// POST - cadastrar informacoes
// PUT - atualizar infos de uma entidade
// PATCH - atualizar uma unica info de uma entidade
// DELETE - deletar uma info
// para o server entender que estamos mandando um jsonk