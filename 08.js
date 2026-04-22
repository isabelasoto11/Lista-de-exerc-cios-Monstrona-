const prompt = require('prompt-sync')()
    const entrada =(prompt("Defina uma senha"))
    const senhaSalva = ("a")
    
 if(entrada == senhaSalva){
    console.log ("Sua senha está correta")
 }else{
    console.log ("Sua senha está incorreta")
 }