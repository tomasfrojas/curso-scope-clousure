// variables

var a; // declarando la variable a
var b = "b"; // declaramos y asignamos
b == "bb"; // re asignacion
var a = "aa"; // re declaracion

//  GLOBAL SCOPE
// Cualquier variable que se encuentre en el documento pasan a ser variuables globales y podemos acceder donde queramos a estas variables o funciones.

var fruit = "Apple"; // global

console.log(fruit);

function bestFruit() {
  console.log(fruit);
}
bestFruit();

function countries() {
  country = "Colombia"; // declarado global, en caso de que yo declarara country (const country = .... ) no podria acceder a esta variable globalmente.
  console.log(country);
}
countries();
console.log(country);

const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    const fruit2 = "banana";
    let fruit3 = "kiwi";
  }
};
