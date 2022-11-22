// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $ ${saveCoins}`);
// }
// moneyBox(5);
// moneyBox(3);
// moneyBox(2);

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $ ${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxTomas = moneyBox();
moneyBoxTomas(10);
moneyBoxTomas(20);
moneyBoxTomas(5);

function createPetList() {
  let petList = [];
  function addPets(pets) {
    petList.push(pets);
    console.log(petList);
  }
  return addPets;
}

const myPetList = createPetList();

myPetList("Michi");
myPetList("Firulais");
