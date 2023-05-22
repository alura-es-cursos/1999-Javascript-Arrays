const lstSecA = [9,8,6,5,7,9];
const lstSecB = [4,9,2,9,7,6,9];
const lstSecC = [9,8,9,7,2,3,6,7];

const sumaSeccion = (lst) => {
    return lst.reduce((prev,act) => prev + act,0);
}

const valorMedia = (sumaSeccion(lstSecA) + sumaSeccion(lstSecB) + sumaSeccion(lstSecC)) 
                    / (lstSecA.length + lstSecB.length + lstSecC.length);

console.log(`El valor de la media de las 3 secciones es: ${valorMedia.toFixed(2)}`);
