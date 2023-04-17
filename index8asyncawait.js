//? Async Await


const ul = document.createElement("ul");
const li = document.createElement("li");
console.log("linea 2");
console.warn("Esto nos sirve para ver cómo funciona el código asíncrono");

//let data = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//    return response.json();
//  })
//  .then(function (data) {
  //  console.log(data);
   // data.forEach(function (post) {
   //   const li = document.createElement("li");
   //   li.innerText = post.title;
   //   ul.append(li);
 //   });
 //   document.body.append(ul);
  //});

// TODO version moderna
//para que el await funcione tiene que estar dentro de una function
async function loadData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data= await response.json ()
    console.log (data)
    data.forEach(function (post) {
     const li = document.createElement("li");
     li.innerText = post.title;
     ul.append(li);
    });
    document.body.append(ul);
    }
    loadData ()