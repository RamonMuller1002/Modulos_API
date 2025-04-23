const fs = require('fs')

/*utf-8 é uma tabela de conversão como a ascii, porém converte acentos também*/

/*Escrevendo um arquivo, substituindo todo o arquivo pela mensagem*/
let texto = "Hello mother fucking world\n"

// fs.writeFile('./texto.txt', texto, 'utf-8', (err) => {
//     if(err){
//         console.log(err)
//     }
// })


/*Escrevendo um arquivo, concatenando todo o arquivo pela mensagem*/
fs.appendFile('./texto.txt', texto, 'utf-8', (err) => {
    if(err){
        console.log(err)
    }
})


/*O fs module, é por paadrão uma função assincrona, logo se em uma excecução ele será ignorado */
fs.readFile('./texto.txt', 'utf-8', (err, data) => {console.log(data)})

