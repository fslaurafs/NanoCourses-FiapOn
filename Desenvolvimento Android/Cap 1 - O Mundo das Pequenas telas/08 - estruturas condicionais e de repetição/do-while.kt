fun main(args: Array<String>) {
    // Do while
    var life = 10
    
    do {
        println("O jogador está com $life vidas")
        life -= 1
    } while (life > 0)
}
