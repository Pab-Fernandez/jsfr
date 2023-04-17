 //? Arrays! 
//!
console.error('objetillos within objetillos')
const user = {
    name: 'Super',
    lastname: 'Putx',
    age: 24,
    addres: {
        country: 'Cape Vedra',
        city: 'Allá',
        street: 'Milf Street  780',

    },
    friends: ['Golfo', 'Tasha', 'Shaniqa'],
    active: true,
    sendMail () {
    
        return 'sending email...'
    }
    // ?nueva sintaxis, se puede escribir el nombre de la función con los paréntesis y al pingo todo. 
}   

console.log (user.name) 
console.log (user.friends)
console.log (user.sendMail())
console.log (user.addres.street)

// TODO Shorthand property names.
console.error ('Shorthand property names')
const name = 'Pipitopo'
const price= 4500

const  newProduct= {
    name,
    price: '$'+(price)
}
//se puede usar una variable dentro del objeto.
console.log (newProduct)

//TODO Manipulación del DOM
console.error ('DOMDOMDOMDOM')

const title = document.createElement('h1')
title.innerText = 'Título desde CreateElement'


const button = document.createElement ('button')
button.innerText = 'OPPA'
button.addEventListener('click', function(){
    console.log ('Holu, mundis')
})
document.body.append (title)
document.body.append (button) 