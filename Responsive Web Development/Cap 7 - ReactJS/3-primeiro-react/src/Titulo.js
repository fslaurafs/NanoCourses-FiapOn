import React, {Component} from 'react';


/* EXEMPLO 1 - PROPS
class Titulo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>{this.props.texto.a}</h1>
        )
    }
}
*/


/* EXEMPLO 2 - REF
class Titulo extends Component {
    constructor(props) {
        super(props);
        this.elementoH1 = React.createRef();
    }

    componentDidMount() {
        this.elementoH1.current.innerHTML = "Outro texto";
    }

    render() {
        return (
            <h1 ref={this.elementoH1}>Texto de exemplo</h1>
        )
    }
}
*/


/* EXEMPLO 3 - ESTADOS 
class Titulo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: "Meu texto padrão"
        }
    }

    render() {
        return (
            <h1>{this.state.texto}</h1>
        )
    }
}
*/


/* EXEMPLO 4 - EVENTOS
class Titulo extends Component {
    constructor(props) {
        super(props);
    }

    funcao() {
        alert("Você clicou no título");
    }

    render() {
        return (
            <h1 onClick={this.funcao}>CLIQUE AQUI</h1>
        )
    }
}
*/


/* EXEMPLO 5 - ESTADOS E EVENTOS  */
class Titulo extends Component {
    constructor(props) {
        super(props);
        this.state = {texto: "CLIQUE AQUI"};
        this.funcao = this.funcao.bind(this);
    }

    funcao() {
        this.setState({texto: "Você clicou no título"});
    }

    render() {
        return (
            <h1 onClick={this.funcao}>{this.state.texto}</h1>
        )
    }
}


export default Titulo;
