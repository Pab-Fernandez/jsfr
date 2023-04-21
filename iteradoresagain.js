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


// TODO Estos son states-
//const [cliente, setCliente] = useState({});//aqui objeto
//const [total, setTotal] =useState (0);//aquí numeroto
//const [clientes, setClientes] = useState ([]); //aqui es un array
//const [modal, setModal] = useState (false);
// React Renderiza cada vez que el state cambia. Para cambiarlo
//? declaramos el state en nuestro componente. Es decor [variable, SetVariable]
