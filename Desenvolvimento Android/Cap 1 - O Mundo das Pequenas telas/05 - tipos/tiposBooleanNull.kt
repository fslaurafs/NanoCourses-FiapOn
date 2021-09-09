fun main(args: Array<String>) {
    var isApproved = true
    var firstTime: Boolean = false
    
    // A linha abaixo o código não irá compilar
    // var driverLicense: String = null
     
    // A atribuição de null a um var também não será compilada
    // var driverLicense: String = "6789877"
    // driverLicense = null // não compila
    
    // Para que uma variável contenha um valor null é necessário o uso do sufixo ? no tipo
    var driverLicense: String? = null
    println(driverLicense)
    
    driverLicense = "6789877"
    println(driverLicense)
}
