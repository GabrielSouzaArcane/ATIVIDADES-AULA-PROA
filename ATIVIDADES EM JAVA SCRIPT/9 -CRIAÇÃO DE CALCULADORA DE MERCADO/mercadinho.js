var mercadinho = [ produto01 = { preco : 5000,
                              nome : "Pc Gamer",
                              modelo : "ASUS ROCK HM-ms10 ns30 " ,
                              marca : "Asus",
                              codigo : 001}, // produto01 é um objeto 

                produto02 = { preco : 300,
                              nome : "headSet",
                              modelo :"Hds-rz4",
                              marca :"Razer",
                              codigo : 002},

                produto03 = { preco : 250,
                              nome : "teclado 60%",
                              modelo :"TCL-red1",
                              marca : "RedDragon",
                              codigo : 003 },

                produto04 = { preco : 400,
                              nome : "Memoria ram 8gb",
                              modelo : "DDR4",
                              marca : "Kingston",
                              codigo : 004},
                              
                produto05 = { preco : 150,
                              nome : "Mouse",
                              modelo :"war-x1.2",
                              marca :"Razer",
                              codigo : 005 },

                produto06 = { preco : 1000,
                              nome : "Monitor",
                              modelo : "sm-snoled",
                              marca : "Samsung",
                              codigo : 006},

                produto07 = { preco : 750,
                              nome : "Mesa Gamer",
                              modelo : "PRO-x1",
                              marca : "pichall",
                              codigo : 007}];
var quantidade = []


var SubTotal = [] 

do{
var codigoCompra = parseFloat(window.prompt("Codigo"))

var codigoQuantidade = parseFloat(window.prompt("Quantidades"))

var busca = mercadinho.findIndex(mercadinho => mercadinho.codigo == codigoCompra);
// a variavel de codigo de compra (codigocompra) recebe a informação do usuario que por sua vez é o codigo do produto, que por sua vez serve para identificar o objto
var valor = ((mercadinho[busca]).preco);
// a variavel "valor" recebe o preço do objeto do vetor mercadinho
var conta = (valor * codigoQuantidade);
// a variavel conta multiplica a " variavel valor pela quantidade exigida pelo usuario"
var nomeproduto = ((mercadinho[busca]).nome);
//
console.log("Nota fiscal \nl produto:" + nomeproduto + ", valor: " + valor + ", quantidade: " + conta + ". <br>" )
//
document.write("<br> Nota fiscal: <br> produto: " + nomeproduto + "<br> valor: " + valor + "<br> quantidade: " + codigoQuantidade + "<br> total: " + conta + ". <br>"  )

var menu = parseFloat(window.prompt("você deseja \n 1- adicionar mais um produto 2 encerrar por aqui"))

quantidade.push(codigoQuantidade)

SubTotal.push(conta)



}while (menu == 1) 

console.log(SubTotal)
console.log(quantidade)

var total = subtotal.reduce((a,b) => {return a + b});
console.log("valor total da compra: " + total + ".");
console.write("valor toral de compra: " + total + ".")