/**
 * Strings em aspas duplas
 + Char em aspas simples
 */

fun main(args: Array<String>) {
    var module: String = "Introdução ao Kotlin"	
    var schoolName = "FIAP"
    
    // Note que letter, na linha abaixo é uma String devido à inferência de tipo
    var letter = "A"
    
    // Para usarmos Char, precisamos definir explicitamente
    var gender: Char = 'M'
    
    // Apresentando os valores
    println(module)
    println(schoolName)
    println(letter)
    
    // Para apresentação de valores Char é necessário a conversão para String
    //  Utilize o caracter $ para saída. Explicaremos o uso do $ nas próximas páginas
    println("$gender")
}
