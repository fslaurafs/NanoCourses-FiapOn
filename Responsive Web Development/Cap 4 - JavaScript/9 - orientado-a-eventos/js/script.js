/* EXEMPLO 1
window.onload = function() {
    var oRetangulo = document.getElementById("retangulo");

    oRetangulo.onmouseover = function() {
        oRetangulo.style.backgroundColor = "#008000";
    }

    oRetangulo.onmouseout = function() {
        oRetangulo.style.backgroundColor = "";
    }
}
*/


/* EXEMPLO 2 */
window.onload = function() {
    var oTxtCep = document.getElementById("cep");
    var oDivMsgCep = document.getElementById("msgCep");

    oTxtCep.onblur = function() {
        /* var oRegExp = new RegExp("^[0-9]{8}$"); */
        var oRegExp = new RegExp("^[0-9]{5}\-[0-9]{3}$");

        if(oRegExp.test(oTxtCep.value) == true) {
            oTxtCep.style.borderColor = "#008000";
            oDivMsgCep.style.color = "#008000";
            oDivMsgCep.innerHTML = "Campo preenchido com sucesso!";
        } else {
            oTxtCep.style.borderColor = "#ff0000";
            oDivMsgCep.style.color = "#ff0000";
            oDivMsgCep.innerHTML = "CEP inválido! Informe novamente!"
        }
    }

    oTxtCep.onfocus = function() {
        oTxtCep.style.borderColor = "";
        oTxtCep.value = "";
        oDivMsgCep.style.color = "";
        oDivMsgCep.innerHTML = "";
    }
}
