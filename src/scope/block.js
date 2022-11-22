// BLOCK SCOPE

function frutas() {
  if (true) {
    var fruta1 = "Apple"; // function scope puedo acceder dentro de toda la funcion asi este dentro de un bloque.
    let fruta2 = "Kiwi"; // block scope solo van a tener ese alcance
    const fruta3 = "Banana"; // block scope solo van a tener ese alcance
    console.log(fruta2);
    console.log(fruta3);
  }

  console.log(fruta1);
  //   console.log(fruta2);// ReferenceError ya que esa variable es block scope y solo se puede acceder dentro del bloque.
  //   console.log(fruta3);// ReferenceError ya que esa variable es block scope y solo se puede acceder dentro del bloque.
}
frutas();
