const lstNotas = [7, 5, 9, 8, 7.5, 4, 10, 9, 8, 9, 10, 9];

let sumaNotas = 0;
lstNotas.forEach(function(nota,posicion) {
    sumaNotas += nota;
    console.log(posicion);
});

const valorMedio = sumaNotas / lstNotas.length;

console.log(`El valor de la media aritmética usando forEach es: ${valorMedio.toFixed(2)}`);
