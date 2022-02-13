// Vamos a almacenar nuestras tareas en un array de objetos literales
// De momento solo podremos leer y no escribir
let tareas = [
    {
        id: 1,
        titulo: 'Mi primera tarea',
        desc: 'Lo que tengo que hacer',
        estado: 'pendiente'
    },
    {
        id: 2,
        titulo: 'Mi segunda tarea',
        desc: 'Otra cosa que tengo que hacer',
        estado: 'en progreso'
    },
    {
        id: 3,
        titulo: 'Mi tercer tarea',
        desc: 'Más cosas para hacer',
        estado: 'terminada'
    }
]


// Process es un objeto global de Node que provee información y control sobre el proceso de Node que se está ejecutando en ese momento.
// Como tal está siempre disponible y no requiere un require (🤡)
// https://nodejs.org/api/process.html

// Dentro de process, podemos acceder al vector (array) de argumentos (argv) de la aplicación
const argumentos = process.argv

// A partir del tercer elemento, tenemos los argumentos con los que se ejecutó la aplicación
// Consideraremos ese elemento como la acción que el usuario quiere realizar.
const accion = argumentos[2];

// Consideraremos todo el resto de los elementos como parámetros de la acción
const parametros = argumentos.slice(3);

// A partir de la acción podremos definir diferentes que deberá hacer nuestra aplicación
// En este caso estaremos armando una aplicación de tareas y nuestras posibles acciones serán:
// - Listar
// - Crear
// - Editar
// - Borrar
// - Buscar
// - Completar
// - Ayuda

// De momento solo estaremos imprimiendo un mensaje para cada acción

switch (accion) {
    case 'listar':
        console.log('📔 Listando tareas');
        console.log('~~~~~~~~~~~~~~~~~~');

        tareas.forEach(tarea => {
            console.log(`#️${tarea.id} - ${tarea.titulo} (${tarea.estado})`);
        });
        break;
    case 'detalle':
        console.log('📖 Detalle de tarea');
        console.log('~~~~~~~~~~~~~~~~~~~');

        // Asumimos que el ID de la tarea es lo que sigue a la acción
        const idTarea = parametros[0];
        const laTarea = tareas.find(tarea => tarea.id == idTarea);

        if (laTarea) {
            console.log(`Título: ${laTarea.titulo}`);
            console.log(`Descripción: ${laTarea.desc}`);
            console.log(`Estado: ${laTarea.estado}`);
        }
        break;
    case 'crear':
        console.log('🆕 Creando tarea');

        let nuevaTarea = {
            // El id será uno más que la cantidad de tareas
            // A futuro tenemos que mejorar esto
            id: ++tareas.length,
            titulo: parametros[0],
            desc: parametros[1],
            // Asumimos que el estado de una nueva tarea es siempre pendiente
            estado: 'pendiente'
        }
        break;
    case 'editar':
        console.log('📝 Editanto tarea');
        break;
    case 'borrar':
        console.log('🗑️  Borrando tarea');
        break;
    case 'buscar':
        console.log('🔎 Buscado tareas');
        break;
    case 'completar':
        console.log('✔️ Completando tarea');
        break;

    // Finalmente atajamos los casos de:
    // - ayuda
    // - sin parámetro
    // - parámetro desconocido
    case 'ayuda':
    case undefined:
    default:
        console.log('Las acciones posibles son');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~'); 
        console.log('❥ listar');
        console.log('❥ detalle [id]');
        console.log('❥ crear');
        console.log('❥ editar');
        console.log('❥ borrar');
        console.log('❥ buscar');
        console.log('❥ completar');
        console.log('❥ ayuda');
        break;
}