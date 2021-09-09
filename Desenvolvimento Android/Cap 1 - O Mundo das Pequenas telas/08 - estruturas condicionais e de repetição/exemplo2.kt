fun main(args: Array<String>) {
    // Exemplo com range de letras
    var letter = "z"
    
    when (letter) {
        in "a".."f" -> println("Você está na turma 1")
        in "g".."l" -> println("Você está na turma 2")
        in "m".."r" -> println("Você está na turma 3")
        else -> println("Você está na turma 4")
    }
}
