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
        console.log('📔 Listando tareas')
        break;
    case 'detalle':
        console.log('📖 Detalle de tarea')
        break;
    case 'crear':
        console.log('🆕 Creando tarea')
        break;
    case 'editar':
        console.log('📝 Editanto tarea')
        break;
    case 'borrar':
        console.log('🗑️  Borrando tarea')
        break;
    case 'buscar':
        console.log('🔎 Buscado tareas')
        break;
    case 'completar':
        console.log('✔️ Completando tarea')
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
        console.log('❥ detalle');
        console.log('❥ crear');
        console.log('❥ editar');
        console.log('❥ borrar');
        console.log('❥ buscar');
        console.log('❥ completar');
        console.log('❥ ayuda');
        break;
}