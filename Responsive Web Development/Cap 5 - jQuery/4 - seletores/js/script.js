/* EXEMPLO 1 */
$(document).ready(function() {
    $("#botao").click(function() {  // '$("#botao")' faz papel do 'document.getElementById()'
        $("p").addClass("vermelho");
    });
});


/* EXEMPLO 2 */
$(document).ready(function() {
    $("#botao").click(function() {
        // procura a palavra azul na div
        $("div:contains('azul')").addClass("azul");
        $("div:not(:contains('azul'))").addClass("naoAzul");
    });
});
