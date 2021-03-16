$(document).ready(function() {
    $("span").hide();   // esconde frase

    // disparado quando a caixa perder o foco
    $("input[type='text']").blur(function() {
        if($(this).val().length == 0) {
            $(this).next().show();
        }
    });

    // disparado quando a caixa ganhar o foco
    $("input[type='text']").focus(function() {
        $(this).next().hide();
    });
});
