fun main(args: Array<String>) {
    // Criando um List de Strings
    var movies = ArrayList<String> ()
    movies.addAll(listOf(
        "Matrix",
        "Vingadores",
        "Jurassic Park",
        "De volta para o Futuro"
    ))
        
    // Criando um list vazio
    var movies2 = ArrayList<String> ()
    
    //Inserindo elementos
    movies.add("Homem-Aranha: De Volta ao Lar")
    println(movies.count())     // retorna: 5
    println("\n")
    
    // Perceba que o código abaixo irá alterar a quantidade de itens do List pois ele aceita itens repetidos
    movies.add("Homem-Aranha: De Volta ao Lar")
    println(movies)             // retorna: ["Matrix", "Vingadores", "Jurassic Park", "De Volta para o Futuro", "Homem-Aranha: De Volta ao Lar", "Homem-Aranha: De Volta ao Lar"]
    println(movies.count())     // retorna: 6 (pois há 2 elementos repetidos)
    println("\n")
    
    // Removendo 2 elementos repetidos
    movies.remove("Homem-Aranha: De Volta ao Lar")
    movies.remove("Homem-Aranha: De Volta ao Lar")
    
    println(movies)             // retorna: ["Matrix", "Vingadores", "Jurassic Park", "De Volta para o Futuro"]
    println("\n")
    
    // Percorrendo um List
    for (movie in movies) {
        println(movie)
    }
    println("\n")
    
    // Verificando se determinado elemento está contido no List
    if (movies.contains("Matrix")) {
        println("Matrix está na minha lista de filmes favoritos!")
    }
    println("\n")
    
    // Vamos criar um novo List para realizarmos algumas operações
    // No exemplo abaixo usaremos um formato mais simplificado de criação de List
    var myWifeMovies = listOf(
        "De Repente 30",
        "Mensagem para Você",
        "Sintonia de Amor",
        "De Volta para o Futuro",
        "Jurassic Park"
    )
    
    // Criando um List com todos os filmes
    var allMovies = movies + myWifeMovies
    println(allMovies)          // retorna: ["Matrix", "Vingadores", "Jurassic Park", "De Volta para o Futuro", "De Repente 30", "Mensagem para Você", "Sintonia de Amor", "De Volta para o Futuro", "Jurassic Park"]
    println("\n")
}
