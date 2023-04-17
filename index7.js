//? OPTIONAL CHAINING

const person = {
  name: "Oliver",
  address: {
    city: "Barcelona",
  },
  location: {},
};
// esto sirve para acceder a un valor que se nos entrega.  en el ejemplo
// aparece un valor previamente no establecido (location)
// y por tanto requiere un condicional para saber qué hacer}
console.log(person);
console.log(person.address.city);

if (person.location) {
  console.log(person.location.city);
}

// con optional chaining...

console.log(person.location?.city);
// en este caso si location existe, muestre city. Como no, aparece undefined

