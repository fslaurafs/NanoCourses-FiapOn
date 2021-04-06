import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo';
import y, {x} from './variaveis.js';


/* EXEMPLO 1 - PROPS
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Titulo texto={{a: 5}}></Titulo>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          Esse é o meu novo texto: {x}
          <br/>
          Esse é o meu outro texto: {y}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


/* EXEMPLO 2 - REF */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Titulo></Titulo>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          Esse é o meu novo texto: {x}
          <br/>
          Esse é o meu outro texto: {y}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
