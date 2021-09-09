/*
 * TIPOS INTEIROS
 * long..........64
 * int...........32
 * short.........16
 + byte..........8
 */

/* TIPOS FLUTUANTES
 * double........64
 + float.........32
 */

fun main(args: Array<String>) {
    var value1 = 50			// Aqui, a inferência é para Int
    var value2: Byte = 50	// Idêntico à linha acima
    
    // Apresentando o value1
    println(value1)
    
    // Apresentando o value2
    println(value2)
    
    // Forma de mostrar o valor mínimo aceito pelo tipo
    println(Byte.MIN_VALUE)
    
    // Forma de mostrar o valor máximo aceito pelo tipo
    println(Byte.MAX_VALUE)
}
