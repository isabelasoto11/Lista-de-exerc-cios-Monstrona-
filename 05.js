const prompt = require('prompt-sync')()
    const AnoN = parseInt(prompt("Digite o ano em que você nasceu"))
    const anoA = parseInt(prompt("Digite o ano em que estamaos?"))
    const Idade = (anoA-AnoN)
    if(Idade >=18){
        console.log ("maior de idade")
    }else{
        console.log ("menor de idade")
    }