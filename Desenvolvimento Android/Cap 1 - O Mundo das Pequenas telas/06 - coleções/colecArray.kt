fun main(args: Array<String>) {
    // Criando um Array de Strings vazio
    var emptyArray = arrayOf<String>()
    
    // Criando um Array de Strings e alimentando valores na criação
    var shoppingList = arrayOf<String>("Leite", "Pão", "Manteiga", "Açúcar")
    
    // Usando inferência
    var inferredShoppingList = arrayOf("Leite", "Pão", "Manteiga", "Açúcar")
    
    // Testando se um Array está vazio
    if (shoppingList.isEmpty()) {
        println("A lista de compras está vazia")
    } else {
        println("A lista de compras NÃO está vazia")
    }
    
    // Recuperando o total de elementos do Array
    println("Nossa lista de compras possui ${shoppingList.size} itens")
    // Resultado: Nossa lista de compras possui 4 itens
}
