fun main(args: Array<String>) {
    // When
    var number = 7
    
    when (number % 2) {
        0 -> println("$number é par")
        else -> println("$number é ímpar")
    }
}
