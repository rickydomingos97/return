import express from 'express'
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type: type,
            comment: comment,
            screenshot: screenshot,
        }
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