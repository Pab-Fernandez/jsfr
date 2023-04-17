

// y object
// para destructurar arrays, se  usa {} 
// y para objects, []. Despues, tiene  sus respectivas sintáxis

const unArray = ['Pomo', 'Piku', 'Kumo', 'Corgnelius']
// TODO >> Métodos de añadir:  PUSH, UNSHIFT (no se usan en 
//React porque cambian el arreglo) Ej: UnArray.push ('Fellini'), pondria 
//? al inicio Fellini. Unshift, al final. "Splice" lo haría de acuerdo a
// la posición: unArray.splice (1,2) en este caso elimina  el 1, Piku, hasta la 2

const otroArray = unArray.filter (function (pet){
//  puedo pedirle que retorne todos menos algo
    return pet === 'Pomo'
    // o solo algo: return pet === 'Piku'
})
//? También puedo reemnplazar del array con la position
// Ej: unArray [0] = 'Fellini' y pum, lo saque a Pomo. Pero no nos sirve 
// para react. Pues modifica el arreglo original. Para eso usar :
//? Método map 

const arrayTercero = unArray.map ( function (amigo){
    if ( amigo === 'Pomo') {
        return 'Fellini'
    } else{
        return amigo
    }
})



console.table (unArray)
console.table (otroArray)
console.table (arrayTercero)

//? Destructuring arrays
const amiigos = ['Pomo', 'Piku', 'Kumo', 'Corgnelius']
//en vez de hacer esto:
//const [am1,am2,am3,am4] = amiigos
//console.warn ('destructuring')
//console.log (am1)
//console.log (am2)
//console.log (am3)
//console.log (am4)
//? se puede hacer esto:
const [, ,am2,] = amiigos

console.log (am2)

//destructuring object

const Perritos = {
    name: 'Juan Carlos',
    raza: 'Chupapijas de pelo corto',
}
const {raza} = Perritos
console.log (raza)