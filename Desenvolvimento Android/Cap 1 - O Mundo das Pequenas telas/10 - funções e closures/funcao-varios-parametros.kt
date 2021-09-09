// Sintaxe para criação de funções:

fun main(args: Array<String>) {
    /*
    fun nomeDaFuncao(parâmetro: Tipo) : TipoDeRetorno {
    	// códigos
    	return TipoDeRetorno
    }
    */
    

    
    // Função que aceita mais de um parâmetro e que retorna algo
    fun sumNumbers(a: Int, b: Int) : Int {
        return a + b
    }
    
    var result = sumNumbers(10, 15)
    println(result)		// 25
}
