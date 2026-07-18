const lista =[
    "Oi, bom dia",
    "Sou uma fake IA Generativa",
    "Criada em uma aula de IA",
    "IA é inteligência artificial",
    "Sou apenas um texto e uma lista de frases",
    "Que aparece quando você clica em um botão"
]
var n = 0;
function funcao (){
    resposta.innerHTML= lista[n];
   n=Math.floor(Math.random() * 6)
}