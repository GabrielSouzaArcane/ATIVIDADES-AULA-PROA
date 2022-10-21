import {useState} from 'react';



function Form() {
    function cadastrarUsuario(e) {
	e.preventDefault()
	alert(`${name} Cadastrado!`)
    }

const [name, setName] = useState()
return (
	<div>
        <img src='https://th.bing.com/th/id/R.53d29e80bab77c5d784f9b55c7451458?rik=%2bI%2fWe9uNG1zA8w&pid=ImgRaw&r=0' width={'50px'} height={'50px'}/>
	<h1>Cadastro:</h1>
	<form onSubmit={cadastrarUsuario}>
		<div>
            
		<input 
        type="text" 
        placeholder="Digite o seu email" onChange={(e) => setName(e.target.value)}/>
		</div>
		<div>
		<input type="submit" value="Cadastrar" />
		</div>
	</form>
	</div>
)
}

export default Form