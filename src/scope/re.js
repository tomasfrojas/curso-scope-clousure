//REASIGNACION Y REDECLARACION

//Una variable declarada con var puede ser redeclarada y reasignada.
// Una variable declarada con let puede ser reasignada, pero no redeclarada.
// Una variable declarada con const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

//var

var firstName;
firstName = "Tomas";
console.log(firstName);

var lastName = "Rojas"; // declarar / asignar
lastName = "Trujillo"; // reasignar
console.log(lastName);

var secondName = "Tomas"; //declarar / asignar
var secondName = "Felipe"; // reasignando / redeclarando
console.log(secondName);

// let

let fruit = "Apple"; // declarar / asignar
fruit = "Kiwi"; // reasignar
console.log(fruit);
// let fruit = 'Banana' // No se puede ya que con let no se puede redeclarar con let

//const

const animal = "dog"; //declarar / asignar
// animal = "cat"; // reasginar -> no se puede reasignar con const
// const animal = 'snake' //redeclarar y reasignar -> no se puede tampoco con const
console.log(animal);

const vehiculos = [];
vehiculos.push("Mazda");
console.log(vehiculos);

vehiculos.pop();
console.log(vehiculos);
