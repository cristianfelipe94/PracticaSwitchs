var salario= prompt("Ingrese Salario");
var categoria= prompt("Ingrese Categoria");
var horasEx= prompt("Ingrese cantidad de Horas Extras Trabajadas");

var salario= parseInt(salario);
var categoria= parseInt(categoria);
var horasEx= parseInt(horasEx);

var precioHora;
    switch (categoria) {
        case 1:
            var precioHora = 30;
            break;
         case 2:
            var precioHora = 38;
            break;
        case 3:
            var precioHora = 50;
            break;
        case 4:
            var precioHora = 0;
            break;
    }
    if (horasEx > 30) {
        var total = ((30 * precioHora) + salario);
        
    }else{
        var total = ((horasEx * precioHora) + salario);
    }

    console.log(`Su Salario Neto es de $${salario}, el Salario Bruto es de $${total}. Trabajó ${horasEx} horas extra, las cuales se le paga a $${precioHora} cada hora `)
