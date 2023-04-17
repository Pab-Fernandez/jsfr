function hello() {
    console.log ('gola')
    console.log ('cómo va?')
    
    return function (){
        return 'Nessun'
    }
}

console.log (hello ()());

function hola (name) {
    return 'Hola ' + name
}
console.log (hola ('Gatopan'))
console.log (hola ('Monopan'))
console.log (hola ('Patopan'))

document.write(hola ('Gatopan'));
document.write(hola())
document.write(hola ('Patopan'))


function add   (x,y) {
    if (y===undefined) {
       y=0 
    }
    return (x+y)
}
console.log (add(10,undefined))
console.log (add(14,-6))
console.log (add(1000,2000))

// TODO Si no pongo los dos parámetros me devolvería NAN a excepción de que indique qué 
//con el parámetro faltante.
//? y, también, para ahorrarnos líneas, puedo darles parámetros por defecto dentro de la function

function add   (x=21,y=1) {
    return (x+y)
}

document.write (add(12))
console.log (add(undefined, 4))
// así. 
//! si no pongo los paréntesis en la function, resulta que no va a ejecutarla
//? si no que me muestra el código. Sintaxis is important. 


