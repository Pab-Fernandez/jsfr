

//? Return en funciones
// ? string literals (va con backtic ``): permite llamar funciones en 
//?     sola línea de código. 


const button = document.createElement ('button')
button.innerText= 'Touch me';
const background = 'white' ;
const color = 'teal';
//button.style = background: teal; color: white;'

button.style = `background: ${background}; color: ${color};`

const hasClearence = true
//console.log (button.style)

button.addEventListener ('click', ()=> {
    if (hasClearence) {
    alert ( 'Ingreso Autorizado')
    } else {
        alert ('Ingreso Denegado')
    }
})
//string literal >>
button.style =  `background: ${isAutorized ? 'white': 'blue' }; color: $ {color}`
document.body.append(button)

//? Ahora con return en lugar de else
/*const button2 = document.createElement ('button')
button.innerText= 'Touch me 2'

button2.addEventListener ('click', ()=> {
    if (hasClearence) {
    return alert ( 'Consenso')
    } alert ('Nope')
    })


document.body.append(button2)*/
// ? String literals 
