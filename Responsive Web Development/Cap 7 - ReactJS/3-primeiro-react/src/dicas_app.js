import MeuComponente from "./dicas";


/* DICA 4 - FUNÇÃO 
class App extends Component {
    constructor(props) {
        super(props);
        this.clicou = this.clicou.bind(this);
    }

    acaoBotao() {
        alert("Evento disparado");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MeuComponente texto="Clique aqui!" funcao={this.acaoBotao} />
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App,js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
                </header>
            </div>
        );
    }
}
*/


/* DICA 5 */
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <MeuComponente titulo="Esse é o título">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </MeuComponente>

                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App,js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
                </header>
            </div>
        );
    }
}
