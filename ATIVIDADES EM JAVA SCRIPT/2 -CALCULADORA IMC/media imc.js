var Altura = Number(window.prompt('Altura'))

var Peso = Number(window.prompt('Peso'))

var media = Peso /(Altura * Altura) 



 if(media<=15)

{alert('MAGREZA')}

 if (media > 15 && media<=25)

{alert('SAUDÁVEL')}

 if (media > 25 && media<=35)

{alert('MODERADO')}

 if (media > 35 && media<=40)

{alert('ACIMA DO PESO')}

 if(media > 40 && media<=50)

{alert('OBESIDADE MÓRBIDA')}




