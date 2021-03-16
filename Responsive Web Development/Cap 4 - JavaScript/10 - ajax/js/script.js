window.onload = function() {
    var oBotao = document.getElementById("botao");
    var oDiv = document.getElementById("cidades");

    oBotao.onclick = function() {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if(xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("cidades").innerHTML = "<pre>" + xhttp.responseText + "</pre>";
            }
        }

        xhttp.open("GET", "ajax.txt", true);
        xhttp.send();
    }
}
