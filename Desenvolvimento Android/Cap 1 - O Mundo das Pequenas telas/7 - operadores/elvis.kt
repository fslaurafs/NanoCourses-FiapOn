fun main(args: Array<String>) {
    // Coalescência nula? Não: Elvis Operator (?:)
    var age: Int? = null        // Permite receber valor nulo
    var myAge = age ?: 0		// 0 (verificou se é nulo)
    println(myAge)
    
    age = 25                    // Atribuiu valor não nulo
    var newAge = age ?:0		// 25 (verificou se é nulo)
    println(newAge)
    
    println("Come on let's twist again")
}
