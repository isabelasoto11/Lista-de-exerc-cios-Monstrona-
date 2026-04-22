const prompt = require('prompt-sync')()
    const estudante =(prompt("Você é estudante ?"))
    const idade =parseInt(prompt("digite sua idade "))
    if(estudante == "sim" || estudante == "Sim"|| idade > 60  ){
        console.log ("Você receberá um desconto!!")
    }else{
        console.log("Lamentamos você não receberá desconto")}