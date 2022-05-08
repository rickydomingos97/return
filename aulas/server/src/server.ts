import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP o servidor esta rodando')
});



// GET - buscar infos
// POST - cadastrar informacoes
// PUT - atualizar infos de uma entidade
// PATCH - atualizar uma unica info de uma entidade
// DELETE - deletar uma info
// para o server entender que estamos mandando um jsonk