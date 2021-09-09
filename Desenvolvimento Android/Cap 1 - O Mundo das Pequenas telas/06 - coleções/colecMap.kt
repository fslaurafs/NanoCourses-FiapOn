fun main(args: Array<String>) {
    // Criando um Set de Strings
    var movies = HashSet<String> ()
    
    var catalog = listOf(
    	"Matrix",
    	"Vingadores",
    	"Jurassic Park",
    	"De Volta para o Futuro"
    )
    
    movies.addAll(catalog)
    // Perceba que o catálogo de filmes está ordenado alfabeticamente
    println(movies)             // retorna: ["Jurassic Park", "Matrix", "De Volta para o Futuro", "Vingadores"]
    println(movies.count())     // retorna: 4
    println("\n")
    
    // Criando um set vazio
    var movies2 = HashSet<String> ()
    
    // Inserindo elementos
    movies.add("Homem-Aranha: De Volta ao Lar")
    println(movies)             // retorna: ["Homem-Aranha: De Volta ao Lar", Jurassic Park", "Matrix", "De Volta para o Futuro", "Vingadores"]
	println(movies.count())     // retorna: 5
    println("\n")
    
    // Perceba que o código abaixo NÃO irá alterar a quantidade de itens do Set pois ele NÃO aceita itens repetidos
    movies.add("Homem-Aranha: De Volta ao Lar")
    println(movies)             // retorna: ["Homem-Aranha: De Volta ao Lar", Jurassic Park", "Matrix", "De Volta para o Futuro", "Vingadores"]
	println(movies.count())     // retorna: 5 (nenhum elemento repetido. E ainda tudo ordenado)
    println("\n")
    
    // Removendo elemento
    movies.remove("Homem-Aranha: De Volta ao Lar")
    println(movies)             // retorna: ["Jurassic Park", "Matrix", "De Volta para o Futuro", "Vingadores"]
	println(movies.count())     // retorna 4
    println("\n")
}
