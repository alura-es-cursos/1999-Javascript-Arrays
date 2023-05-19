const lstNotasYAlumnos = [['Daniela','Lucas','Álvaro','Valeria'],
                            [9,8.5,9.5,10],
                        ];

const [lstAlumnos, lstNotas] = lstNotasYAlumnos;


const nombreAlumno = 'Lucas';

if (lstAlumnos.includes(nombreAlumno)) {
    console.log('Alumno encontrado');
    const posicionAlumno = lstAlumnos.indexOf(nombreAlumno);
    const notaAlumno = lstNotas[posicionAlumno];
    console.log(`La nota final del alumno ${nombreAlumno} es ${notaAlumno}`);
} else {
    console.log('Alumno NO encontrado');
}
