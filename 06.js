const prompt = require('prompt-sync')()
const nota_final = parseFloat(prompt("Digite sua nota final"))
const frequência= parseInt(prompt("Digite sua frequência"))

if (nota_final > 10){
    console.log("Notas somente de 0 a 10!")
}
else if(nota_final >= 7){ 
    if (frequência >= 75){
    console.log ("Você está aprovado!")
    }else{
        console.log("Você passou MAS reprovou por falta!")
    }
} else if (nota_final >= 4 && nota_final <= 6)
    {console.log("Vai para o exame!")
    } else {
        console.log("Reprovou!")
    }