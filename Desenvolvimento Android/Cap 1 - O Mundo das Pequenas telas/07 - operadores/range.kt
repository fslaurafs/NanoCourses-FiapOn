fun main(args: Array<String>) {
    // Closed Range(..) e Half Closed Range(until)
    println("\nClosed Range ..")
    var numbers = 1..10
    
    for (number in numbers) {
        println(number)		// Imprime de 1 a 10
    }
    
    println("\nHalf Closed Range (until)")
    var newNumbers = (1 until 10)
    
    for (number in newNumbers) {
        println(number)		// Imprime de 1 a 9
    }
}
