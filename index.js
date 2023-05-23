var setaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    Bruna.style = "display:none"
    Samanta.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top:55px "
    setaDireita.style = "display:none"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:flex"
    Samanta.style = "display:none"
    setaDireita.style = "display:flex; margin-top:55px "
    setaEsquerda.style = "display:none"
}