var nome =prompt("Seu nome")
var dia =  parseInt(prompt("Dia que você nasceu"))
var mes =  parseInt(prompt("Mês que você nasceu")) 


if (dia >=22 && mes == 12 || dia <=20 && mes == 1) {confirm(nome + " Seu signo é Capricórnio")}
else if (dia >=21 && mes == 1 || dia <= 19 && mes == 2 ) {confirm(nome + " Seu signo é Aquário")}
else if (dia >=20 && mes == 2 || dia <= 20 && mes == 3 ) {confirm(nome + " Seu signo é Peixe")}
else if (dia >=21 && mes == 3 || dia <= 20 && mes == 4 ) {confirm(nome + " Seu signo é Áries")}
else if (dia >=21 && mes == 4 || dia <= 20 && mes == 5) {confirm(nome + " Seu signo é Touro")}
else if (dia >=21 && mes == 5 || dia <= 20 && mes == 6 ) {confirm(nome + " Seu signo é Gêmeos")}
else if (dia >=21 && mes == 6 || dia <= 21 && mes == 7 ) {confirm(nome + " Seu signo é Câncer")}
else if (dia >=22 && mes == 7 || dia <= 22 && mes == 8 ) {confirm(nome + " Seu signo é Leão")}
else if (dia >=23 && mes == 8 || dia <= 22 && mes == 9 ) {confirm(nome + " Seu signo é Virgem")}
else if (dia >=23 && mes == 9 || dia <= 22 && mes == 10 ) {confirm(nome + " Seu signo é Libra")}
else if (dia >=23 && mes == 10 || dia <= 21 && mes == 11 ) {confirm(nome + " Seu signo é Escorpião")}
else if (dia >=22 && mes == 11 || dia <= 21 && mes == 12 ) {confirm(nome + " Seu signo é Sagitário")}