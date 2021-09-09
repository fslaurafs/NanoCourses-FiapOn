// Definindo um enum fora da função main
enum class Compass {
    north,
    east,
    west,
    south
}

fun main(args: Array<String>) {
    // Criando uma variável do tipo Compass
    var direction = Compass.north
    
    // Como o Kotlin trabalha com inferência de tipo, podemos usar somente .valor, caso o tipo seja definido explicitamente
    var direction2: Compass = Compass.south
    
    println("Minha direção é $direction")		// Minha direção é north
    
    // ENums são muito usados com switch para análise do valor
    when (direction) {
        Compass.north -> println("Estamos indo para o Norte")
        Compass.south -> println("Estamos indo para o Sul")
        Compass.east -> println("Estamos indo para o Leste")
        Compass.west -> println("Estamos indo para o Oeste")
    }		// Estamos indo para o Norte
    
    // Outra forma de apresentar informações de um Enum
    Compass.values().forEach {
        println(it)
    }
}
