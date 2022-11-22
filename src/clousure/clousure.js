function greeting() {
  let userName = "Tomas";

  function displayUserName() {
    return `Hola ${userName} como estas?`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());
