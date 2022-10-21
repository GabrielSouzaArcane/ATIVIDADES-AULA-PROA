import logo from './logo.svg';
import './App.css';
import Form from './Comp1'
import CompLista from './Comp2';
import Botao from './Comp3';

function App() {

  const ListaSimples = ['SEJA', 'BEM', 'VIMDO']


  return (
    <div className="App-header">

      <header>
        <Botao/>
        
      </header>

      <body>
        <CompLista itens={ListaSimples}/>
      </body>

      <footer>
        <Form/>
      </footer>
      </div>
  );
}
export default App