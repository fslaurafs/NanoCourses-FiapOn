/* EXEMPLO 1 */
$(document).ready(function() {
    $("#quadrado").resizable().draggable(); // recebe 2 métodos específicos da biblioteca jQueryUI
});


/* EXEMPLO 2 */
$(document).ready(function() {
    $("#accordion").accordion();
});


/* EXEMPLO 3 */
$(document).ready(function() {
    $("#data").datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    });
});
