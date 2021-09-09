// Sintaxe para criação de funções:

fun main(args: Array<String>) {
    /*
    fun nomeDaFuncao(parâmetro: Tipo) : TipoDeRetorno {
    	// códigos
    	return TipoDeRetorno
    }
    */
    

    
    // Exemplo de uma função simples que não recebe parâmetros e não retorna nada
    fun helloFormal() {
        println("Hello!")
    }
    
    helloFormal()		// Hello!
    

    
    fun helloModoReduzido() = println("Hello, modo reduzido!")
    helloModoReduzido()		// Hello, modo reduzido!
}
