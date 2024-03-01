

    
function copiarDatos(){

    onClick=event.preventDefault()

    var nombreDelCliente = document.getElementById("nombreCliente").value
    var apellidoDelCliente = document.getElementById("apellidoCliente").value
    var edadDelCliente = document.getElementById("edadCliente").value
    var nombreVendedor = document.getElementById("nombreVendedor").value
    var producto = document.getElementById("producto").value
    var codigoProducto = document.getElementById("codigo").value
    var precioProducto  = document.getElementById("precio").value

    var texto = "El nombre del cliente es: " + nombreDelCliente + " " + apellidoDelCliente + "\t\t\t\t\t" + "la edad del cliente es: " + edadDelCliente + "\t\t\t" + "el nombre del vendedor es: " + nombreVendedor + "\t\t\t" + "el producto que compró es: " + producto + " codigo: " + codigoProducto + " precio: " + precioProducto


console.log(texto)

    

    document.getElementById("texto").innerHTML = texto

}