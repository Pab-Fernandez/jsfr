

// ? Array Methods
// 

const names = ['Beetlejuice', 'KumaCurry', 'Pipitopo', 'Moloko']
//
//for (let i = 0; i < names.length; i++) {
//const element = array[i];
//    console.log (element)
//}
console.log (names)
//? ForEach
names.forEach(function (name) {

})

//? Map
const newNames = names.map (function (name) {
    return `Hola,  ${name}`
})

console.log (newNames)

const nameFound = names.find (function (nameone) {
if (nameone === 'KumaCurry') {
    }    return nameone

})

console.log  (nameFound)
// ? Filter
const imUsingFilter = names.filter (function (name){
    if (name !== 'KumaCurry') {
    } return name 
})

console.log (imUsingFilter)

const someNewNames = ['Josecito','Jacobo', 'Jiman']
console.log (someNewNames)

console.log (names.concat(someNewNames)) 


const usingFilterAgain = someNewNames.filter (function (someNewName){
    if (someNewName !== 'Jiman'){
        return someNewName
    }
})
console.log (usingFilterAgain)
// por qué sale aqui? ahh? ahh?
