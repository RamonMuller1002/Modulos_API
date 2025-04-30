const express = require('express')
const router_aulas = express.Router()

const { lerAula, atualizaAula } = require('./db-modeling')

//Incluir as rotas que fazem parte deste roteador

router_aulas.get('', (req, res) => {
    console.log("entrou")
    const aulas = lerAula('./database.json');
    if (!dados) {
        res.status(500).json({ msg: "Erro no servidor" })
    }
    res.send(aulas)
})

router_aulas.get('/aulas/:id', (req, res) => { // procurar usuário pelo id
    const id = req.params.id // pegando o id pela url
    console.log(req.params.id)
    const aulas = lerAula('./database.json')

    if (!aulas) {
        res.status(500).json({ msg: "Erro" })
    }
    const classe = aulas.find(aulas => aulas.id == id)
    if (!classe) {
        res.status(404).json({ msg: "Usuário não encontrado" })
    }
    res.status(201).send(classe)
})

router_aulas.post('/aulas', (req, res) => {
    const dados = req.body
    const aulas = lerAula('./database.json')
    if (!aulas) {
        res.status(500).json({ msg: "Erro" })
    }
    dados['id'] = Date.now()
    console.log(aulas)
    aulas.push(dados)

    const atualizou = atualizaAula('database.json', aulas)
    if(!atualizou){
        res.status(500).json({msg:"Erro no servidor"})
    }else{
        res.status(201).json(aulas)
    }

})


router_aulas.put('/aulas/:id', (req, res) => {
    //pegar id
    const id = req.params.id
    const aulas = lerAula('./database.json')
    const aulaIndex = aulas.findIndex(aulas => aulas.id == id);
    const dados = req.body;
    if(aulaIndex !== -1){
        for (key in dados){
            aulas[aulaIndex][key] = dados[key]
        }
    }
    else{
        res.status(404).json({msg:"Aula não encontrada"})
    }
    const atualizou = atualizaAula('./database.json', aulas)
    if(!atualizou){
        res.status(500).json({msg:"Erro no servidor"})
    }else{
        res.status(201).json(dados)
    }
})

router_aulas.delete("/aulas/:id", (req, res) => {
    //pegar id
    const id = req.params.id
    const aulas = lerAula('./database.json')
    const aulaIndex = aulas.findIndex(aulas => aulas.id == id);
    if(aulaIndex !== -1){
        aulas.splice(aulaIndex, 1)
    }
    else{
        res.status(404).json({msg:"Aula não encontrada"})
    }
    const atualizou = atualizaAula('./database.json', aulas)
    if(!atualizou){
        res.status(500).json({msg:"Erro no servidor"})
    }else{
        res.status(201).json(aulas)
    }
})

module.exports = router_aulas