const fs = require('fs')

const lerAula = (arquivo) => {
    try{
        const aulas = JSON.parse(fs.readFileSync(arquivo, 'utf-8'))
        return aulas
    }
    catch{
        return false
    }

}

const atualizaAula = (arquivo, aulas) => {
    try{
        fs.writeFileSync(arquivo, JSON.stringify(aulas))
        return true
    }catch (err){
        return err
    }
}

module.exports = { lerAula , atualizaAula }