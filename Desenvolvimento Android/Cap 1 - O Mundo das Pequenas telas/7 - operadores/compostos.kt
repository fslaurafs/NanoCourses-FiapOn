fun main(args: Array<String>) {
    // Compostos (+=, -=, *=, /=, %=, ++, --)
    var a = 2
    var b = 3
    var newValue = 5
    
    newValue += a		// 7
    newValue -= b		// 4
    newValue *= a		// 8
    newValue /= a		// 4
    newValue %= b		// Resto da divisão: 1
    
    newValue++			// Incrementando 1
    println(newValue)
    
    newValue--			// Decrementando 1
    println(newValue)
}
