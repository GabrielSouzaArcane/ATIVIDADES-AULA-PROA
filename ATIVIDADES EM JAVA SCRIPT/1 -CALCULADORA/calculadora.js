//var num = parseFloat(window.prompt("DIGITE"))

//switch(num){
    //case 1: alert("DIGITE"); break;
    //case 2: alert("DIGITE"); break;
    //case 3: alert("DIGITE"); break;
    //default: alert("DIGITE"); break;}

    //var nota1 = parseInt(window.prompt("1º Numero"))
    //var nota2 = parseInt(window.prompt("2º Numero"))

    //
    var n1 = parseFloat(window.prompt("DIGITE"))
    var n2 = parseFloat(window.prompt("DIGITE"))

    var OPERAÇÃO = parseFloat(window.prompt (`
    1 = +
    2 = -
    3 = *
    4 = /`))

    switch(OPERAÇÃO){
        case 1: alert(n1+n2);break; 
        case 2: alert(n1-n2);break;
        case 3: alert(n1*n2);break;
        case 4: alert(n1/n2);break;
    }
        //break é para encerrar o case
        //switch tem a função parecida "if" de forma mais organizada 
    
