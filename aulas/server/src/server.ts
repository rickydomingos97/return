import express from 'express'

const app = express();

 app.get('/user', (req, res) => {
    return res.send('oi pessoas de bem')
})

app.get('/order', (req, res) => {
    return res.send('casa de papel')
})



app.listen(3333, ()=> {
    console.log('HTTP o servidor esta rodando')
})