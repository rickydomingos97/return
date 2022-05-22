import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('O servidor esta rodando com sucesso')
});
// GET - buscar infos
// POST - cadastrar informacoes
// PUT - atualizar infos de uma entidade
// PATCH - atualizar uma unica info de uma entidade
// DELETE - deletar uma info