//Gabriel Antonio de Souza



var nota1 =parseFloat(window.prompt("nota1"))
var nota2 =parseFloat(window.prompt("nota2"))
var nota3 =parseFloat(window.prompt("nota3"))
var nota4 =parseFloat(window.prompt("nota4"))

var peso1 = 1.5;
var peso2 = 1.5;
var peso3 = 3;
var peso4 = 4;

var media = ((nota1*peso1)+(nota2*peso2)+(nota3*peso3)+(nota4*peso4))/ (peso1+peso2+peso3+peso4) 

//var é variavel, parsefloat permite digitar números décmais

if (media >= 6)
    {alert(`APROVADO! Resultado${media}`)}


if (media >= 5 && media <=6)
    {alert(`RECUPERAÇÃO! Resultado ${media}`)}

if (media < 5 )
    {alert(`REPROVAÇÃO! Resultado ${media}`)}

