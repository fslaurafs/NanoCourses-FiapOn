/* EXEMPLO 1:
window.onload = function() {
    var objTxtNota = document.getElementById("nota");
    var objDivResultado = document.getElementById("resultado");
    var objBotao = document.getElementById("botao");

    objBotao.onclick = function() {
        var objFloNota = parseFloat(objTxtNota.value);

        if(objFloNota >= 6.0) {
            objDivResultado.innerHTML = "Aluno aprovado.";
            console.log("Aluno aprovado com nota " +objFloNota);
        } else {
            objDivResultado.innerHTML = "Aluno reprovado"
            console.log("Aluno reprovado com nota " +objFloNota);
        }
    }
}
*/


/* EXEMPLO 2:
window.onload = function() {
    var objTxtNota = document.getElementById("nota");
    var objDivResultado = document.getElementById("resultado");
    var objBotao = document.getElementById("botao");

    objBotao.onclick = function() {
        var objFloNota = parseFloat(objTxtNota.value);

        if(objFloNota >= 6.0) {
            objDivResultado.innerHTML = "Aluno aprovado.";
            console.log("Aluno aprovado com nota " +objFloNota);
        } else {
            if(objFloNota >= 4.0) {
                objDivResultado.innerHTML = "Aluno em exame."
                console.log("Aluno em exame com nota " +objFloNota);
            } else {
                objDivResultado.innerHTML = "Aluno reprovado"
                console.log("Aluno reprovado com nota " +objFloNota);
            }
        }
    }
}
*/


/* EXEMPLO 3 */
window.onload = function() {
    var objTxtSigla = document.getElementById("sigla");
    var objDivResultado = document.getElementById("resultado");
    var objBotao = document.getElementById("botao");

    objBotao.onclick = function() {
        switch(objTxtSigla.value) {
            case 'SP':
                objDivResultado.innerHTML = "São Paulo";
                break;

            case 'RJ':
                objDivResultado.innerHTML = "Rio de Janeiro";
                break;
            
            case 'MG':
                objDivResultado.innerHTML = "Minas Gerais";
                break;

            case 'ES':
                objDivResultado.innerHTML = "Espírito Santo";
                break;
            
            default:
                objDivResultado.innerHTML = "Não é um estado do sudeste";
        }
    }
}
