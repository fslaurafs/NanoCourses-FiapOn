import React, {Component} from 'react';


/* DICA 1 - USAR VARIÁVEIS 
class MeuComponente extends Component {
    render() {
        let f = <a href="http://www.fiap.com.br">Fiap</a>;

        return (
            <div>
                <div>O link da {f}</div>
                <div>Outro link da {f}</div>
            </div>
        );
    }
}
*/


/* DICA 2 - USAR VARIÁVEIS 
class MeuComponente extends Component {
    constructor(props) {
        super(props);
    }

    criaLink(nome, url) {
        return<a href={url}>{nome}</a>;
    }

    render() {
        return (
            <div>
                <div>{this.criaLink("Fiap", "http://www.fiap.com.br")}</div>
                <div>{this.criaLink("Google", "http://www.google.com.br")}</div>
            </div>
        );
    }
}
*/


/* DICA 3 - FUNÇÃO MAP ASSOCIADA A VETORES
class MeuComponente extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let v = [1,2,3,4,5];

        let h = v.map((valor, indice) => {
            return <li key={indice}>{valor}</li>
        });

        return (
            <div>
                <div> <ul>{h}</ul> </div>
            </div>
        );
    }
}
*/


/* DICA 4 - FUNÇÃO 
class MeuComponente extends Component {
    constructor(props) {
        super(props);
        this.clicou = this.clicou.bind(this);
    }

    clicou() {
        if(this.props.funcao != undefined)
            this.props.funcao();
    }

    render() {
        return (
            <input type="button" value={this.props.texto} onClick={this.clicou} />
        );
    }
}
*/


/* DICA 5 */
class MeuComponente extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.titulo}</h2>
                    {this.props.children}
            </div>
        );
    }
}


export default MeuComponente;
