const prompt = require('prompt-sync')()
let numero = parseInt(prompt("Digite um número inteiro "))
let resu = (numero/2)
    if( resu % 2 == 0){
        console.log ("O seu número é par")
    }else{
        console.log (" O seu nímero é ímpar")
    }