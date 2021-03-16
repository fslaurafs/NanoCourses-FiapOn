<?php
/* recebe a sigla */
$sigla = "";
if(isset($_POST['sigla'])) {
    $sigla = strtoupper($_POST['sigla']);
}

/* procura a sigla */
switch($sigla) {
    case "SP":
        echo "São Paulo";
        break;
    case "RJ":
        echo "Rio de Janeiro";
        break;
    case "MG":
        echo "Minas Gerais";
        break;
    case "ES":
        echo "Espírito Santo";
        break;
    default:
        echo "Não é um estado do sudeste.";
}
?>
