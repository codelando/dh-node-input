// Process es un objeto global de Node que provee informaci贸n y control sobre el proceso de Node que se est谩 ejecutando en ese momento.
// Como tal est谩 siempre disponible y no requiere un require (馃ぁ)
// https://nodejs.org/api/process.html

// Dentro de process, podemos acceder al vector (array) de argumentos (argv) de la aplicaci贸n
const argumentos = process.argv

// A partir del tercer elemento, tenemos los argumentos con los que se ejecut贸 la aplicaci贸n
// Consideraremos ese elemento como la acci贸n que el usuario quiere realizar.
const accion = argumentos[2];

// Consideraremos todo el resto de los elementos como par谩metros de la acci贸n
const parametros = argumentos.slice(3);

// A partir de la acci贸n podremos definir diferentes que deber谩 hacer nuestra aplicaci贸n
// En este caso estaremos armando una aplicaci贸n de tareas y nuestras posibles acciones ser谩n:
// - Listar
// - Crear
// - Editar
// - Borrar
// - Buscar
// - Completar
// - Ayuda

// De momento solo estaremos imprimiendo un mensaje para cada acci贸n

switch (accion) {
    case 'listar':
        console.log('馃摂 Listando tareas')
        break;
    case 'detalle':
        console.log('馃摉 Detalle de tarea')
        break;
    case 'crear':
        console.log('馃啎 Creando tarea')
        break;
    case 'editar':
        console.log('馃摑 Editanto tarea')
        break;
    case 'borrar':
        console.log('馃棏锔?  Borrando tarea')
        break;
    case 'buscar':
        console.log('馃攷 Buscado tareas')
        break;
    case 'completar':
        console.log('鉁旓笍 Completando tarea')
        break;

    // Finalmente atajamos los casos de:
    // - ayuda
    // - sin par谩metro
    // - par谩metro desconocido
    case 'ayuda':
    case undefined:
    default:
        console.log('Las acciones posibles son');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~'); 
        console.log('鉂? listar');
        console.log('鉂? detalle');
        console.log('鉂? crear');
        console.log('鉂? editar');
        console.log('鉂? borrar');
        console.log('鉂? buscar');
        console.log('鉂? completar');
        console.log('鉂? ayuda');
        break;
}