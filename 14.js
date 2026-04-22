const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite um número: "))
let resultado = 1

for (let contador = 1; contador <= numero; contador++) {
    resultado *= contador
}

console.log(`O fatorial de ${numero} é ${resultado}`)