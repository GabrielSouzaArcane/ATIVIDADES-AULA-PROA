import { getElementError } from "@testing-library/react"

function Form(){
    function CadastroUsuario(e){
        e.preventDefault()
        var conta = document.getElementById("jj").value
        alert("Cadastro Realizado "+ conta )
        console.log("Cadastro Realizado "+ conta )
    }

    return(
        <div>
            <p>Para mais informações e Notificações cadastre seu email: </p>
            <form onSubmit={CadastroUsuario}>
                <div>
                    <input id="jj" type="text" placeholder="Digite seu email"/>
                </div>
                <div>
                    <input type="submit" value="Inscrever!"/>
                </div>


            </form>
        </div>
    )
}

export default Form