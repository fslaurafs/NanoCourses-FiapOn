/* EXEMPLO 1
// declaração da função aloMundo()
function aloMundo() {
    objResultado = document.getElementById("resultado");
    objResultado.innerHTML += "Alô Mundo! <br>";  // incremento
}

window.onload = function() {
    objBotao = document.getElementById("botao");
    objBotao.onclick = function() {
        //chamada da função aloMundo()
        aloMundo();
    }
}
*/


/* EXEMPLO 2
function soma(num1, num2) {
    objResultado = document.getElementById("resultado");
    objResultado.innerHTML += (num1 + num2) + "<br>";  // incremento
}

window.onload = function() {
    objBotao = document.getElementById("botao");
    objBotao.onclick = function() {
        // chamada da função soma()
        soma(3, 5);
    }
}
*/


/* EXEMPLO 3
function soma(num1, num2) {
    return num1 + num2;
}

window.onload = function() {
    objBotao = document.getElementById("botao");
    objBotao.onclick = function() {
        // chamadas da função soma()
        objResultado = document.getElementById("resultado");
        objResultado.innerHTML += soma(soma(3, 5), 8) + "<br>";
    }
}
*/


/* EXEMPLO 4 */
function soma(num1, num2) {
    return num1 + num2;
}

window.onload = function() {
    objBotao = document.getElementById("botao");
    objBotao.onclick = function() {
        objTxtNum1 = document.getElementById("num1");
        objTxtNum2 = document.getElementById("num2");
        objResultado = document.getElementById("resultado");
        objResultado.innerHTML += soma(parseInt(objTxtNum1.value), parseInt(objTxtNum2.value)) + "<br>";
    }
}
