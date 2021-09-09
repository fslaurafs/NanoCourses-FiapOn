fun main(args: Array<String>) {
    // Elaborando uma coleção do tipo List com números entre 1 a 10
    var numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    println(numbers)
    
    
    
    // "Filtrando" (filter) somente os números pares da coleção numbers à variável temporária chamada "it" utilizada na operação
	var evenNumbers= numbers.filter { it%2 == 0 }
    println("Listagem de números Pares: $evenNumbers")
    
    // "Filtrando" (filter) somente os números ímpares da coleção numbers à variável temporária chamada "it" utilizada na operação
	var oddNumbers = numbers.filter { it%2 != 0 }
    println("Listagem de números Ímpares: $oddNumbers")
    
    
    
    // A utilização do Map executa o processamento individual de cada elemento dentro da coleção
    var multiplyNumbers = numbers.map { it * it }
    println("Multiplicação: $multiplyNumbers")
    
    
    
    // Executa o processamento da coleção de acordo com os parâmetros enviados
    var sumNumbers = numbers.reduce {
        // Captura o valor anterior ou atual (acc) e o valor atual (it)
        acc, it ->
        
        // Apresenta as informações
        println("acc = $acc, it = $it")
        
        // Executa o processamento das informações
        acc + it
    }
    
    println("Resultado da Somatória: $sumNumbers")		// Total 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
}
