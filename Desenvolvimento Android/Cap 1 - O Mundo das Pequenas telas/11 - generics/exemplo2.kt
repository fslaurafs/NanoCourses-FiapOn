// Generics é muito utilizado para acessar informações externas
// Trabalha apenas com o mesmo tipo

fun main(args: Array<String>) {
    var coisa1 = "04020-010"
    var coisa2 = "04020010"
    
    with(coisa1) {
        coisa1 = coisa2
        coisa2 = this
    }
    
    println("$coisa1, $coisa2")
}
