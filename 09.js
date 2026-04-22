const prompt = require('prompt-sync')()

    const tabuada =parseInt(prompt("Qual tabuada você quer saber"))
    for(let contador = 1; contador <= 10; contador++){ 
        console.log(` ${tabuada} x ${contador}=${tabuada*contador}`)
 }
 