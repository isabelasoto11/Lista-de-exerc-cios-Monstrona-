let prompt = require('prompt-sync')()
let soma = 0
let numero
    do{
     numero = parseInt(prompt(`Digite um número`))
    soma += numero  
    }while(numero != 0)
        console.log (soma )