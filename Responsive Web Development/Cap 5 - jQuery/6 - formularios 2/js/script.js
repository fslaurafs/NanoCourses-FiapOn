$(document).ready(function() {
    $("#todos").click(function() {  // evento onclik
        if($("#todos").is(':checked')) {
            $("input[name='interesses']").trigger("click");
        } else {
            $("input[name='interesses']").prop('checked', false);
        }
    });

    // mostra o conteúdo dos interesses no console
    $("input[name='interesses']").click(function() {
        console.log($(this).val());
    });
});
