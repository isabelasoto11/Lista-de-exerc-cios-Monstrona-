const prompt = require('prompt-sync')()
    let Salario =parseFloat(prompt("Digite o seu salário "))
    let aumento = (Salario*1.15)

    console.log (`O seu salário com aumento de 15% é de :${aumento}`)