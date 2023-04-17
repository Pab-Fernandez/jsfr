
const title = document.createElement('h1')
title.innerText = 'DestructingJS'

document.body.append(title)

//?Aquí se enmplean desde el parámetro
const user = {
    name: 'Josie',
    age: 45,
    bloodtype:'blue',
    lastname: 'Pompón'
}
function printInfo (user) {
    return  '<h1>Hola ' + user.name + '</h1> <h2>No te preocupes, los '  + user.age + ' son los nuevos 20</h2>'
}
console.log (printInfo (user))
document.body.innerHTML = printInfo(user)

console.error ('Destructuring objetos')
//puedo usar las llaves {} dentro de la función.
function printInfo (user) {
    const { lastname,bloodtype} = user
    console.log (lastname, bloodtype);
    return '<h1> Su tipo de sangre es: ' + (bloodtype) + '</h1>'
}
console.log (printInfo (user))
document.body.innerHTML= printInfo (user)

//TODO funciones anónimas.. (porque no tienen nombre)
function start() {
return 'Starting...'
}
console.log (start ())

//? también puedo hacer
console.log (function start() {
    return 'Starting...'
    }()) 
    // si le agrego () al final, se ejecuta
    
    const button = document.createElement ('button')
    button.innerText = 'Thougts and prayers'

    button.addEventListener ('click', function (){
        alert('Sent')
    })
document.body.append (button)

//Todo "Arrow functions"

/* function add (x,y) {
    return x + y
}*/
// ahora con arrow function

const add = (x,y) => {
return x + y
}
console.log (add(7,1))

//? Inline arrow : es un método acotado de hacer las funciones

const showText = ( ) => {
    return 'Buenas, mundo'
}

console.log (showText())

const button2 = document.createElement ('button')
button2.innerText = "Empezar"

button.addEventListener('click', () => {
    alert ('Allá la están empezando')
})
document.body.append(button2)

//? Inline Arrow Function

const showText2 = () => 'Hola, bomba'
console.log (showText2())
const showNumber= () => 22;
const showBoolean= () => true;
const showArray= () => ['12,13,14'];

console.log(showArray())
console.log (showArray)

//? es medio problemática con  objeto. van paréntesis y llaves. 

const showObject = () => ({ojos: 'marrón', pelo: 'escaso'})
console.log (showObject())