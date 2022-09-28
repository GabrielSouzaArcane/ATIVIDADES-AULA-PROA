let bancodedados = []

do{
    
    var client = parseFloat(window.prompt(`
    Escolha a opção desejada:
    1 - cadastrar um novo cliente 
    2 - Consultar um cliente especifico
    3 - Excluir um cliente especifico 
    4 - Listar todos os clientes 
    5 - Encerrar`))

    switch(client){
        case 1:{
            while(true){

                var nome = window.prompt("Nome:")
                var cpf  = window.prompt("CPF:")
                var endereco = window.prompt("Endereco:")
                var email = window.prompt("Email:")
                var telefone = window.prompt("Telefone")
                                        
                var cadastrar = {
                    nome: nome,
                    cpf: cpf,
                    endereco: endereco,
                    email: email,
                    telefone: telefone 
                }

                bancodedados.push(cadastrar)

                var opção = window.prompt("cadastrar mais uma pessoa")
          
                while (opção != "S" && opção != "N")
          
                var opção = window.prompt("S OU N")

                if(opção == "N"){
                    break;
               }
            };break;
        }
        case 2:{

            var nome = window.prompt("Digite o nome de usuario desejado:")
                        
            var pesquisa = bancodedados.find( usuario => usuario.nome == nome)
                
           console.log(pesquisa)
            ;break;
        }
        case 3: { 
            let remove = prompt("nome que vc quer remover")
            let verificar = bancodedados.indexOf(remove)
            verificar++
            console.log(bancodedados.splice(verificar, 1))}; 
            break;

        case 4: {
                 for(var i = 0; i < bancodedados.length; i++){
                 console.log(bancodedados[i]);}
        }

        }
    }  

while( client != 5) 
                
console.log(bancodedados)
                
                        