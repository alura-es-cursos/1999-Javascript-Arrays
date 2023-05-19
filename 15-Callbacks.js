const lstNombres = ['Diego','María','Leonardo'];

//Función anonima como argumento
/*lstNombres.forEach(function(nombre) {
    console.log(nombre);
});*/
//console.log('********');
//Función arrow o función de flecha
//lstNombres.forEach((nombre) => console.log(nombre));

//Declaración de función
function imprimeNombres(nombre) {
    console.log(nombre);
}

lstNombres.forEach(imprimeNombres);