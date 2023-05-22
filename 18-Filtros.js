const lstAlumnos = ['José','María','Diego','Juliana','Leonardo'];
const lstNotas = [4,5,6,5,8];

const lstAlumnosReprobados = lstAlumnos.filter((e,i)=> lstNotas[i] < 6);

console.log(lstAlumnos);
console.log(lstAlumnosReprobados);