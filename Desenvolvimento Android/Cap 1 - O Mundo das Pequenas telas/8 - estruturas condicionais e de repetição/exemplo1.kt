fun main(args: Array<String>) {
    // Exemplo com vários cenários no mesmo case
    var letter = "z"
    
    when (letter) {
        "a", "e", "i", "o", "u" -> println("vogal")
        else -> println("consoante")
    }
}
