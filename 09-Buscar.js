const lstNotasYAlumnos = [['Daniela','Lucas','Álvaro','Valeria'],
                            [9,8.5,9.5,10]];

const nombreAlumno = 'Lucas';

if (lstNotasYAlumnos[0].includes(nombreAlumno)) {
    console.log('Alumno encontrado');
    const posicionAlumno = lstNotasYAlumnos[0].indexOf(nombreAlumno);
    const notaAlumno = lstNotasYAlumnos[1][posicionAlumno];
    console.log(`La nota final del alumno ${nombreAlumno} es ${notaAlumno}`);
} else {
    console.log('Alumno NO encontrado');
}