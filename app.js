// Process es un objeto global de Node que provee información y control sobre el proceso de Node que se está ejecutando en ese momento.
// Como tal está siempre disponible y no requiere un require (🤡)
// https://nodejs.org/api/process.html

// Dentro de process, podemos acceder al vector (array) de argumentos (argv) de la aplicación
const argumentos = process.argv

console.log('El primer elemento es el ejecutable de node:');
console.log(argumentos[0]);
console.log();

console.log('El segundo argumento es el path absoluto a la aplicación que estamos ejecutando')
console.log(argumentos[1]);
console.log();

console.log('A partir del tercer elemento, tenemos los argumentos con los que se ejecutó la aplicación')
console.table(argumentos.slice(2));
console.log();