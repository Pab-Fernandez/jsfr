//Iteradores

const amiigos = ['Pomo', 'Piku', 'Kumo', 'Corgnelius']

//forEach

const arrayForeach = amiigos.forEach (function (pet){
    console.log (pet)
})

//map

console.warn ('Aquí usando map')
//Permite crear un nuevo arreglo
const arrayMap = amiigos.map (function (pet){
    console.log (pet)
})


// TODO             Estos son states-
//const [cliente, setCliente] = useState({});//aqui objeto
//const [total, setTotal] =useState (0);//aquí numeroto
//const [clientes, setClientes] = useState ([]); //aqui es un array
//const [modal, setModal] = useState (false);
// React Renderiza cada vez que el state cambia. Para cambiarlo
//? declaramos el state en nuestro componente. Es decor [variable, setVariable]
//? El segundo valor, función modificadora, es la que la declara. Aquí "setVariable"
//TODO                  Hooks
// Se colocan en laparte superior de los componentes en React.
//No puden ir en condicionales, y van antes del return. 
// ? const [cliente, setCliente] = useState({})
//?     abajo de esto va. no pueden in ir if ni el return. 

//TODO           Eventos en REact 
// Se parecen a los JS, se escriben con camelCase.
// A diferencia de JS y HTML. Ej:
// HTML : <button conclick= "descagarPedidos()" ></button>
//? JSX  : <button onClick = {descargarPedidos()}></button>
// HTML : <form onsubmit= "agregarCliente()"; return false"> 
//         <button type= "sumit">Submit</button> 
//     </form>  
//? JSX  :  <form onsubmit = {HandleSunbmit}>
//         <button type "submit"> Añadir Cliente</button>
//     </form>

//? Reglas JSX Notas:
//SIEMPRE tiene que haber un return ()
//Si pide que cierre una etiqueta, pum se pona la barita al final />
// Siempre rodear los elementos en el nivel más alto. no puede haber varios
//Estos elementosse pueden englobar en uno solo. para no morir de divs
//Se usa el logo de rolling. <> y se cierra </>  (fragment)
//antes del return puede ir todo el JS que queramos, después solo en ternarios. 

//?Props en REACT
// Los states o funciones creados en un componente, sólo están disponibles
//en ese componente.La forma de llevarlos a otro es un  prop
// Son útiles porque de esa manera no duplicamos código. 
//TODO Sólo se pueden pasar de padre al hijo, nunca al revés. 
// en este caso, yo tengo un state en Formulario.jsx,no puede pasar
//a App.jsx---
//? Sintaxis Props // o propiedades
// <Header 
// nombreProp = { datos o Funciones} />
// Se le puede pasar todo tipo de datos. Arrays, funciones, etc. 
// <Header 
// clientes = {clientes}
//    admin = (false)
//    setClientes= {setClientes} //aquí un state, por ej. 
//    título = eshop 
//    /> 