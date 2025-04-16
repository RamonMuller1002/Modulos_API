const express = require('express');
const app = express()  // inicializa executando a função express()
const PORT = 8000 // reserva a porta para rodar o servidor


const database = []


//Criar minhas rotas
app.get('/teste', (req, res) => {
    console.log("usuário acessou")
    res.send('Qualquer coisa')
})

app.post('/aulas', (req, res)=>{
    console.log('criando algo')
    res.send('Criando algo')
})



app.listen(PORT, () => {console.log("Servidor online")})

