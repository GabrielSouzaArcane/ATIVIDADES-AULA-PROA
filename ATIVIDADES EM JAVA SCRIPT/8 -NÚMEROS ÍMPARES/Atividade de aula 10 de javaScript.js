var numeros = []

var qnt = parseInt(window.prompt("Quantos números deseja digitar"))

for (var i = 0; i < qnt; i++){
    var escolha = parseInt(window.prompt(`Digite o ${i+1}° Número`))

    var impar = escolha % 2 

    if (impar == 1){
        numeros.push(escolha)
    }
}
numeros.sort(function(a, b){
    return a - b
});

alert(numeros)