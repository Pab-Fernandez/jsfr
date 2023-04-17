//

//? Spread Operators

const names = ["Pipi", "Topo", "Mila", "Nesa"];
const otherNames = ["Moñito", "Codito", "Tirabuzon"];

console.log([...names, ...otherNames]);
// ahi se sumarían los elementos de cara arreglo
//pero, como si esto fuera poco, tmb sirve para objetos!

const user = {
  name: "Lomo",
  lasName: "Loco",
};

const address = {
  street: "Avenida Siempre Viva 123",
  city: "Alberdi",
};

const userInfo = {
  ...user,
  ...address,
};
console.log(user);
console.log(address);
console.log(userInfo);

//? Ecmascript modules

//import { add } from "./add";
//console.log(add(40, 20));
//
//import { multiply } from "./add";
//console.log(multiply(7, 3));

import {points, add, multiply, title, active} from "./add.js";
console.log(active, points, title);

import addModule from "./add.js";

console.log(addModule);

