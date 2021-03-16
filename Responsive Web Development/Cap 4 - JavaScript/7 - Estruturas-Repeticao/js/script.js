/* EXEMPLO 1 
window.onload = function() {
    var objDivSaida = document.getElementById("saida");
    var i=1;

    while(i <=10 ) {
        objDivSaida.innerHTML += i + "<br>";
        i++;
    }
}
*/


/* EXEMPLO 2 
window.onload = function() {
    var objDivSaida = document.getElementById("saida");
    var i=1;

    do {
        objDivSaida.innerHTML += i + "<br>";
        i++;
    } while(i <= 10); // a condição é falsa, logo de início
}
*/


/* EXEMPLO 3 
window.onload = function() {
    var objDivSaida = document.getElementById("saida");

    for(var i=1; i<=10; i++) {
        objDivSaida.innerHTML += i + "<br>";
    }
}
*/


/* EXEMPLO 4 */
window.onload = function() {
    // declaração de array com 5 elementos
    var aLinguagens = ["JavaScript", "Java", "PHP", "Python", "C#"];
    var objDivSaida = document.getElementById("saida");

    //estrutura for...of (em outras linguagens é o for...each)
    for(sLinguagem of aLinguagens) {
        objDivSaida.innerHTML += sLinguagem + "<br>";
    }
}
