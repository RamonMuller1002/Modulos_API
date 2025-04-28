const express = require('express');
const fs = require('fs')
const app = express()  // inicializa executando a função express()
const PORT = 8000 // reserva a porta para rodar o servidor

app.use(express.json())// Faça para o servidor qie vai receber dados json




//Criar minhas rotas
app.get('/aulas', (req, res) => {
    fs.readFile('./database.json', 'utf-8', (err, data) => { //abrndo o arquivo database e lendo ele, em formato utf-8
        const aulas = JSON.parse(data)
        console.log(aulas)
        res.send(aulas)
    })
})

app.get('/aulas/:id', (req, res) => { // procurar usuário pelo id
    const id = req.params.id // pegando o id pela url
    console.log(req.params.id)
    fs.readFile('./database.json', 'utf-8', (err, data) => { //abrndo o arquivo database e lendo ele, em formato utf-8
        if (err) {
            res.status(500).json({ msg: "Erro" })
        }
        const aulas = JSON.parse(data)
        const classe = aulas.find(aulas => aulas.id == id) //procura em tudo, comparando com o id procurado
        if (classe) {
            res.status(200).json(aulas)
        }
        res.status(404).json({ msg: "usuario não encontrado" })
    })
})

    app.post('/aulas', (req, res) => {
        const dados = req.body
        fs.readFile('./database.json', 'utf-8', (err, data) => { //abrndo o arquivo database e lendo ele, em formato utf-8
            if (err) {
                res.status(500).json({ msg: "Erro" })
            }
            const aulas = JSON.parse(data)
            dados['id'] = aulas.length + 1
            aulas.push(dados)
            
            fs.writeFile('database.json', JSON.stringify(aulas), (err) => {
                if (err) {
                    res.status(500).json({ msg: 'Erro no servidor' })
                }
                res.status(201).send(dados)
            })
        })
    })



app.put('/aulas/:id', (req, res) => {
    //pegar id
    const id = req.params.id

    //procurar o id
    const usuario = database.find(user => user.id == id)
    if (!usuario) {
        res.status(404).json({ msg: "Usuário não encontrado" })
    }
    //modificar os campos
    //atualizar array

    res.send('ok')
})


app.delete("/aulas/:id", (req, res) => {
    //pegar id
    const id = req.params.id

    //procurar o id
    const userIndex = database.findIndex(user => user.id == id)
    if (userIndex === -1) {
        res.status(404).json({ msg: "Usuário não encontrado" })
    }
    database.
        //modificar os campos
        //atualizar array

        res.send('ok')
})


app.listen(PORT, () => { console.log("Servidor online") })
