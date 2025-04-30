const express = require('express');
const app = express()  // inicializa executando a função express()
const PORT = 8000 // reserva a porta para rodar o servidor

const router_aulas = require('./roteamento/aula-roteamento')
const modeling = require('./roteamento/db-modeling')
app.use(express.json())// Faça para o servidor qie vai receber dados json


//Aplicação da arquitetura de back-end
//aspas vazia, que não adiciona nada na url, se colocar algo precisa atualizar a url
//    '/v1'   ->    localhost:8000/v1/aulas...
app.use('', router_aulas)



//Criar minhas rotas
app.listen(PORT, () => { console.log("Servidor online") })