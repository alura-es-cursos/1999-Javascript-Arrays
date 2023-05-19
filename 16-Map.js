const notas = [10, 9, 5, 3, 7, 9];

const notasActualizadas = notas.map((nota) => (nota / 2)<3 ? 3 : (nota/2));

console.log(notasActualizadas);