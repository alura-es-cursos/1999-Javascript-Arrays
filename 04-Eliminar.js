const notas = [8, 7, 9, 6, 10];

let media = (notas[0]+notas[1]+notas[2]+notas[3]+notas[4])/notas.length;
console.log(media);
//console.log(notas);
//Quitar elemento al final
//notas.pop();
//Quitar elemento al inicio
notas.shift();

//console.log(notas);

media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log(media);

