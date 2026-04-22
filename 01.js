const prompt = require('prompt-sync')()

    let nota01 =parseFloat(prompt("Digite sua primeira nota: "))
    let nota02 =parseFloat(prompt("Digite sua segunda nota: "))

    let media = (nota01+nota02)/2

    console.log (`Média é :${media}`)