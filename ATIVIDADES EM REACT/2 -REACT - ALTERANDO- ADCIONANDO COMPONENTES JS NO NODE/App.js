import logo from './logo.svg';
import './App.css';
import Item from './item';

import Resultado from './item3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <input type="text"></input>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PROFF<code> u-U</code> HOJE É SEU NIVER!.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=RAQmKOsonhc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div><Resultado/></div>
        </a>
      </header>

      
    </div>
  );
}

export default App;
