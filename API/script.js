const express = require('express');
const app = express()  // inicializa executando a função express()
const PORT = 8000 // reserva a porta para rodar o servidor

app.use(express.json())// Faça para o servidor qie vai receber dados json

const database = [
    {
        id: 1,
        title: "Desenvolvimento de sistemas",
        curso: "Técnico",
        turma: "3B",
        professor: "Ramon Brignolli"
    }
]



//Criar minhas rotas
app.get('/testes', (req, res) => {
    res.status(200).send(database)
    res.send('Qualquer coisa')
})

app.get('/aulas/:id', (req, res) => {
    console.log(req.params.id)
})

app.post('/aulas', (req, res)=> {
    const dados = req.body
    dados['id'] = database.length + 1

    console.log(req.body)
    res.send(database)
})



app.listen(PORT, () => {console.log("Servidor online")})

