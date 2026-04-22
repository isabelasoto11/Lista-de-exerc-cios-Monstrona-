const prompt = require('prompt-sync')()

let quantidade = parseInt(prompt("Quantas notas você quer inserir? "))
let soma = 0

for (let i = 1; i <= quantidade; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i}: `))
    soma += nota
}

let media = soma / quantidade

console.log(`A média é ${media.toFixed(2)}`)