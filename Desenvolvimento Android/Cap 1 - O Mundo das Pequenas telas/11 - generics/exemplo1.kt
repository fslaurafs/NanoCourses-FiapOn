// Generics é muito utilizado para acessar informações externas
// Trabalha apenas com o mesmo tipo

fun main(args: Array<String>) {
    var coisa1 = "Segunda"
    var coisa2 = "Terça"
    
    with(coisa1) {
        coisa1 = coisa2
        coisa2 = this
    }
    
    println("$coisa1, $coisa2")
}
