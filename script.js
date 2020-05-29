var n1 = window.document.getElementById('nota1')
var n2 = window.document.getElementById('nota2')
var n3 = window.document.getElementById('nota3')
var res = window.document.getElementById('resultado')

function calcular() {

    var nota1 = Number(n1.value)
    var nota2 = Number(n2.value)
    var nota3 = Number(n3.value)
    var media
    var media = (nota1+nota2+nota3)/3
    media = media.toFixed(2)

        if (media >= 7){
            res.innerHTML = `O valor da média foi ${media}! PARABÉNS VOCÊ FOI APROVADO!`
        } else {
            res.innerHTML = `O valor da média foi ${media}! VOCÊ FOI REPROVADO!`
        }



    
    
}



   
