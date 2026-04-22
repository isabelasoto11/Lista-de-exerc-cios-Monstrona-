let prompt = require('prompt-sync')()

let limite =parseInt(prompt("Digite um número limite "))

for(let contador = 0; contador <= limite; contador++){ 
   if (contador % 2 == 0) {
    console.log(contador)
}
}
