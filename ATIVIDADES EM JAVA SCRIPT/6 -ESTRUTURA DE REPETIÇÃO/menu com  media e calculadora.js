do{
        
    var Menu = parseFloat(window.prompt(`
        1 = Media do aluno
        2 = Calculadora
        3 = Encerrar`))

    if (Menu == 1){
                    var nota1 =parseFloat(window.prompt("nota1"))
                    var nota2 =parseFloat(window.prompt("nota2"))
                    var nota3 =parseFloat(window.prompt("nota3"))
                    var nota4 =parseFloat(window.prompt("nota4"))
                
                var media = (nota1 + nota2 + nota3 + nota4) / 4
                     
                if (media >= 6)
                    {alert(`APROVADO! Resultado = ${media}`)}
                
                if (media >= 5 && media < 6)
                    {alert(`RECUPERAÇÃO! Resultado = ${media}`)}
                
                if (media <= 4 )
                    {alert(`REPROVAÇÃO! Resultado = ${media}`)}}
            
  
       if (Menu == 2) { 
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
                            case 4: alert(n1/n2);break;}}}
        while(Menu != 3 )         