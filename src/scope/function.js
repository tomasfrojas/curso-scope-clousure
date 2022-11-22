// FUNCTION SCOPE

function greeting() {
  let userName = "Tomas";
  console.log(userName);

  if (userName === "Tomas") {
    console.log(`Hello ${userName} how r u?`);
  }
}
greeting();

// console.log(userName);// ReferenceError ya que no podemos acceder a la variable userName debido a que esta declarada y asignada dentro de la funcion y el alcance solo va a estar dentro de la misma funcion.
