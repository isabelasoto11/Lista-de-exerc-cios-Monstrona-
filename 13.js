const prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Digite sua nota: "))

while (nota < 0 || nota > 10) {
    console.log("Valor inválido!")
    nota = parseFloat(prompt("Digite sua nota novamente: "))
}

console.log("Nota válida!")