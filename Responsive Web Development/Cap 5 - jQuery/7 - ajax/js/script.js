$(document).ready(function() {
    $("#sigla").keyup(function() {   // assim q a tecla for despressionada o evento será iniciado
        if($("#sigla").val().length == 2) {
            $.ajax({
                url: "ajax_server.php",
                method: "POST",
                data: "sigla="+$("#sigla").val(),
                success: function(result) {
                    $("#resultado").html(result);   // corresponde ao 'innerHTML'
                },
                error: function() {
                    $("#resultado").html("Houve uma falha na requisição!");
                }
            });
        } else {
            $("#resultado").html("");
        }
    });
});
