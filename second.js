"use strict";
//მასივების მეთოდები
const absde = [4, 5, 7];
console.log(absde.toString()); //gასტრინგავს
console.log(absde.join("&")); //ყოველი ელემენტის შორის დაწერს ამაზე
absde.pop();
const defg = [5, 6, 7];
console.log(absde.toString()); //gასტრინგავს
console.log(absde.join("&")); //ყოველი ელემენტის შორის დაწერს ამაზე
console.log(absde.pop()); //ბოლო ელემენტს გამოსახავს
absde.push(9); //ეს უმატებს ელემენტს
console.log(absde);
absde.shift(); // პირველი ელემენტს შლის
absde.unshift(1); //ეს პირველ ელემენტის წინ დაუწერს
const allWords = absde.concat(defg); //აერთიანებს მასივებს
console.log(allWords);
absde.splice(2, 0, 7); //ამ დროს მეორე ელემენტის მერე წაიშალა 0 ელემენტი მაგრამ დაემატა 7 -ე ელემენტი
absde.slice(1, 3); // ეს ნიშნავს რომ პირველი ელემენტის ჩათვლით ამოიჭრება მესამე ელემენტამდე

//filter
const ricxvebi = [1, 2, 3, 4, 5, 6];
const xutzeNaklebi = ricxvebi.filter((number) => {
  return number < 5;
});
//ინტერვალი
function tqvi() {
  console.log("tqvi");
}
setTimeout(tqvi, 2000); //2 წამში გამოგიტანს ამ წარწერას
setInterval(tqvi, 3000); //ყოველ 3 წამში გამოიძახებს ამ ფუნცქაიას

//DOM
document.addEventListener(scroll, function () {
  let scrollValue = scrollY;
  console.log(scrollValue); //ამით ჩვენ ვნახავთ როცა ჩამოვსქროლავთ როგორ შეიჩვლება Y ღერძზე მონაცემები
});

//local storage
localStorage.setItem("Name", "Ilia"); //ვაწესებთ მონაცემებს(keys, values)
//getItem ვიძახებთ, ხოლო removeItem ვშლით

//Break and continue
const cars = ["mersedes", "BMW", "Audi"];

// for (let car of cars) {
//   if (car === "BMW") break; // ამ დროს შეჩერდება
//   console.log(car);
// }
for (let car of cars) {
  if (car === "Audi") continue; //ამ დროს მოცემულ მნიშვნელობას გამოტოვებს და ისე გააგრძლებს იტერაციას
  console.log(car);
}

//callback

const aa = (callback) => {
  setTimeout(() => {
    console.log("me var ilo");
    callback();
  }, 2000);
};
const bb = () => {
  console.log("me var iliko");
};
aa(bb);

//Set
const manqanebi = new Set(["BMW", "Mersedes", "Audi"]);
manqanebi.add("BMW"); //ამას სეტი არ დაბეჭდავს რადგან სეტი ინახავს უნიკალურ მონაცემებს
manqanebi.delete("Mersedes"); //წაშლა
manqanebi.forEach((car) => {
  console.log(car);
});
console.log(manqanebi.has("BMW")); //აქვს თუ არა ეს მნიშვნელობა სეტს
console.log(manqanebi.size); //რამდენ მნიშვნელობას მოიცავს

//კლასები
class First1234 {
  constructor(Name, Year) {
    this.name = Name;
    this.year = Year;

    console.log(`My ${this.name} is ilia, I'm ${this.year}`);
  }
}
class Second12345 extends First1234 {}
const hero = new Second12345("iliko", 25);
console.log(hero);
// class, (inheritance, and super)
class Third extends First1234 {
  constructor(Name, Year, Country) {
    super(Name, Year);
    this.country = Country;

    console.log(
      `Hi, I'm ${this.name}, I'm ${this.year} old, and I'm from ${this.country}`
    );
  }
}

const mySeld = new Third("iliko", 1997, "Georgia");
console.log(mySeld);
///
//შეცდომების საპოვნელად
//try and catch
try {
  console.log("Hello");
} catch (error) {
  console.log("oops" + error);
}

//spred
const cipri1 = [1, 2, 3];
const cipri2 = [4, 5, 6];
const yvela = [...cipri1, ...cipri2];
console.log(yvela);

//async function
//promise; //ეს ეგრეწოდებული პირობაა რომელიც მომავლიდან აკეტებს გადაწყვეტილებას და თუ წარმატებულია გაუშვებს რესოლვით თუ არადა რეჯექთით
const lotteryPromise1 = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You Win"); //თუ სწორია მაშინ ეს დაიწერება
    } else {
      reject(new Error("You lost your money")); // თუ არასწორია მაშინ ეს
    }
  }, 2000);
});
lotteryPromise1
  .then((res) => console.log(res)) //თუ სწორია მაშინ რესოლვში მიცემს უფლებას დაწეროს
  .catch((err) => console.error(err)); //თუ არადა რეჯექთთან გადაინაცვლებს
//თუ ორი პრომისია მაშინ ბოლოს დავწერთ Promise.all([promise1, promise2]).then().catch

function f1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("This is called function");
    }, 3000);
  });
}

async function f2() {
  console.log("...waiting");
  const result = await f1(); //სანამ await მისგან პასუხს არ მიიღებს ელოდება მას
  console.log(result);
}

f2();

//API
const URL = ""; //აქ ჩავწერთ API -ის კოდს

function GetAPI() {
  fetch(URL)
    .then((response) => response.json)
    .then((data) => console.log(data)) //როცა ინდექსით ვცდილობთ მივაწოდოთ მაშინ უნდა დავუწეროთ დეითას წინ JSON.stringify()
    .catch((error) => console.log(error));
}
GetAPI();

//რორგორ მივწვდეთ html-ში API-დან მოცემულ ინფორმაციას
const getUsers = async () => {
  try {
    const ul = documelnt.querySelector("ul");
    const users = await fetch("URL").then((_) => _.json());
    users.foreach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `${user.name} $(user.surName)`;
      ul.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};
getUsers();

//მოდულები, გამოიყენება ორი ჯავაკსრიპტის ფაილის დაკავშირებაში
export function GetName(name) {
  //ეს უნდა ეწეროს პირველ ჯავაკსრიპტის ფაილში
  return name;
}
//მეორე ჯავაკსრიპტის ფაილში კი უნდა დავწეროთ
import { GetName } from "/main.js";
console.log(GetName("ilia"));
//ამ დროს უნდა დავწეროთ ორივე index.html ფიაილში სქრიპტში შემდეგი:
//<script src='main.js' defer type = 'module'></script>

//ან ასევე შეგვიძია default-ით პირდაპირ იმპორტს მივუწეროთ გვერდით მისი სახელი , მაგ:
//const car = {model: 'BMW};
//export default car;
//import car;∂

//

//1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  switch (true) {
    case avgDolphins >= avgKoalas * 2:
      console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
      break;
    case avgKoalas >= avgDolphins * 2:
      console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
      break;
    default:
      console.log(`No team wins`);
  }
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins`);
  }
};

checkWinner(averageDolphins, averageKoalas);

//2

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];
console.log(total);

//3

const myCountry = {
  country: "Georgia",
  capital: "Tbilisi",
  language: "Georgian",
  population: 3.5,
  neighbours: ["Armenia", "Azerbaijan", "Russia", "Turkey"],

  describe: function () {
    return `${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
};
console.log(
  `${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
console.log(myCountry.describe());

//4

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcMBI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcMBI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
mark.calcMBI();
john.calcMBI();

console.log(mark.BMI, john.BMI);
console.log(
  `${
    john.BMI > mark.BMI
      ? "John's BMI is higher than Mark's"
      : "Mark's BMI is higher than John's"
  }`
);

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName} BMI is higher (${mark.BMI}) than john's (${john.BMI})`
  );
} else {
  console.log(
    `${john.fullName} BMI is higher (${john.BMI}) than john's (${mark.BMI})`
  );
}

//5

const years = [1996, 1997, 2000, 2027];
const ages = [];
const ages2 = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2037 - years[i];
  ages2.push(2037 - years[i]); //მეორენაირად
}

console.log(ages);
console.log(ages2);

//6
const population = [3.5, 7, 13, 350];
const percentages2 = [];
const percentageOfWorld1 = function (people) {
  return (people / 7900) * 100;
};

for (let i = 0; i < population.length; i++) {
  const perc = percentageOfWorld1(population[i]);
  percentages2.push(perc); // an meorenariad percentage2 [i] = perc;
}
console.log(percentages2);

//7
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
console.log(listOfNeighbours[0][0]);

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}

//8  while loop
const population1 = [3.5, 7, 13, 350];
const percentage3 = [];
const percentageOfWorld2 = function (people) {
  return (people / 7900) * 100;
};

i = 0;
while (i < population1.length) {
  const perc = percentageOfWorld2(population1[i]);
  percentage3.push(perc);
  i++;
}
console.log(percentage3);

//9
const calcTip1 = (bill) =>
  bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips1 = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const calc = calcTip1(bills1[i]);
  tips1[i] = calc;
  // tips.push(calc);
  totals[i] = calc + bills1[i];
}
console.log(tips1);
console.log(totals);

const calvAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};
calvAverage(bills1);

//10

const calcTempAmplitude = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
};

calcTempAmplitude([3, 4, -5], [0, 3, 4]);

//11

const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const temperature = arr[i];
    const days = [i + 1];
    console.log(`${temperature}˚C in ${days} days`);
  }
};
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);

//guess the number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});

// modal functionality
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Data structures
const restaurant = {
  name: "Classico Italiano",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.categories[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    //!!!
    starterIndex = 1, //ამის მნიშვნელობებს იმიტო ვწერთ რომ თუ გამოძახებულში არ გვექნება მნიშვნელობა მითითებული მაშინ ამას მნიშვნელობებს მიანიჭებს
    mainIndex = 0,
    time = 17,
    address = "Tbilisi",
  }) {
    console.log(
      `Order received! ${this.categories[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
//გამოძახება 1
restaurant.orderDelivery({
  time: "20:30",
  address: "Zugdidi",
  mainIndex: 2,
  starterIndex: 3,
});
//გამოძახება 2
restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 3,
});
//destructure arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const name1 = ([x, y, z] = arr); //!!!
console.log(name1);

let [first, second] = restaurant.categories;
console.log(first, second); // მაგრამ თუ გამოტოვებით გვინდა პირველი და მესამე მონაცემი ...
const [pirveli, , mesame] = restaurant.categories;
console.log(pirveli, mesame);

// მნიშვნელობის შეცვლა ხდება შემდეგნაირად:

first = second;
second = first;
console.log(first, second);
// ამის შეცვლა მეორენაირადაც შესაძლებელია
[first, second] = [second, first];
console.log(first, second);

const [starter, mainMenu] = restaurant.order(2, 0);
console.log(starter, mainMenu);

// nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [k, , [o, p]] = nested;
console.log(k, o, p); //masividan gamovitanet

const [zet, xet, vet] = [8, 9];
console.log(zet, xet, vet); //undefined rogor movashorot?
const [zet1 = 1, xet1 = 1, vet1 = 1] = [8, 9];
console.log(zet1, xet1, vet1); // boloshi dajdeba 1;

//ობიექტის დესტრუქტურიზაცია
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//როგორ შევცვალოთ ობიექტების სახელები
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
//როგორ შევცვალოთ ობიექტები
let ana = 111;
let nino = 999;
const obj = { ana: 23, nino: 33, tengo: 35 };
({ ana, nino } = obj); //!!!
console.log(ana, nino);

//nested objects
const { fri } = openingHours;
console.log(fri);
//თუ პირდაპირ მნიშვნელობები გვინდა გამოვსახოთ...
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
//თან თუ გვინდა ობიექტებს სახელები შევუცვალოთ...
const {
  fri: { open: oo, close: cc },
} = openingHours;
console.log(oo, cc);

// const restaurant = {
//   name: "Classico Italiano",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.categories[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     //!!!
//     starterIndex = 1, //ამის მნიშვნელობებს იმიტო ვწერთ რომ თუ გამოძახებულში არ გვექნება მნიშვნელობა მითითებული მაშინ ამას მნიშვნელობებს მიანიჭებს
//     mainIndex = 0,
//     time = 17,
//     address = "Tbilisi",
//   }) {
//     console.log(
//       `Order received! ${this.categories[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is you delicious past with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   //პიცის გამოძახება პირველი იქნება მთავარი დანარჩენი კი დამატებითი და მასივში მოვაქცევთ ყველას
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// // // ელემენტების დამატება მასივებში
// // const arr = [7, 8, 9];
// // const newArr = [1, 2, ...arr]; //ყველაზე კარგი გზა
// // console.log(newArr);

// // const newMenu = [...restaurant.mainMenu, "Gnocci"];
// // console.log(newMenu);

// // //ელემენტის კოპირება
// // const copyElement = [...restaurant.mainMenu];
// // console.log(copyElement);

// // //ორი მასივის ერთად დამატება
// // const menu = [...restaurant.mainMenu, ...arr];
// // console.log(menu);

// // // Iterables are: strings, arrays, maps, sets, but not objects.
// // const str = "ilo";
// // const letters = [...str];
// // console.log(letters);
// // //დავამატოთ ინდგრედიეტები პასტას
// // const ingredients = [
// //   // prompt("ingredients1"),
// //   // prompt("ingredients2"),
// //   // prompt("ingredients3"),
// // ];
// // //ხდება ორი გზით
// // // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // // restaurant.orderPasta(...ingredients);

// // //objectebshi
// // const newRestaurant = {
// //   foundIn: 1997,
// //   ...restaurant,
// //   founder: "ilo",
// // };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = "Ristorane Roma";
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

// // //აერთიანებს მასივებს, (spread). !!!
// // const arr1 = [1, 2, ...[3, 4]];
// // console.log(arr1);

// // //მასივის ელემენტებს ახალ მასივში ჩასმა(rest), გამოყოფა !!!
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// // //
// // const [pizza, , rissoto, ...otherFood] = [
// //   ...restaurant.categories,
// //   ...restaurant.mainMenu,
// // ];
// // console.log(pizza, rissoto, otherFood);

// // //ობიექტიდან ახალი ობიექტის გამოტანა
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // //ფუნქციის გამოყენებით ნებისმიერი მოცემული მასივების ჯამის გაგება
// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };
// // add(2, 3);
// // add(3, 5, 7, 8);
// // add(5, 2, 7, 4);
// // const x = [23, 6, 3];
// // add(...x);

// // restaurant.orderPizza("mushrooms", "olivia", "onion"); //შესაბამისად აქ მივიღებთ მთავარ ინგრედიენტად პირველს ხოლო დანარჩენს ერთ მასივში მოვათავსებთ.

// // // || და && გამოყენება
// // //|| ოპერატორი აგრძლებს გადასვლას მანამ სანამ სწორ ოპერატოს არ ნახავს
// // restaurant.numGuests = 23;
// // const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guest1);
// // //მეორე ვარიანტი
// // const guest2 = restaurant.numGuests || 10;
// // console.log(guest2);
// // //არის ასევე კიდევ ერთი ოპერატორი Nullish
// // //ეს ოპერატორი false value დ აღიქვამს მხოლოდ undefined და null.
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// //&& ოპერატორში თუ პირველი მნიშვნელობა სწორია აგრძელებს გადასვლას ბოლომდე
// //if it is true
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "avocado");
// }
// //მეორენაირად
// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "avocado");

//challange 11
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
const allPlayers = [...players1, ...fieldPlayers2];
const {
  odds: { team1, x: draw, team2 },
} = game;
//6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
//7
team1 < team2 && console.log("Team 1 is a winner");
team1 > team2 && console.log("Team 2 is a winner");

// const restaurant = {
//   name: "Classico Italiano",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
// };

const menu = [...restaurant.mainMenu, ...restaurant.categories];

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}
//მეორე ვარიანტი
for (const item of menu) {
  console.log(item);
}
//მენიუსა სახით გამოტანა
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//არსებობს თუ არა
console.log(restaurant.openingHours?.thu ?? "does not exist");

//key values
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
//entire object
const entires = Object.entries(restaurant.openingHours);
for (const [key, { open, close }] of entires) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//Challange2
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1
for (const [number23, playerB] of game.scored.entries()) {
  console.log(` Goal ${number23 + 1} by ${playerB}`);
}
//2 საშუალოს გაგება
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
}

//set
const staff = ["Waiter", "Chef", "Manager"];
const staffUnique = new Set(staff);
console.log(staffUnique);

//Map
const rest = new Map();
rest
  .set("open", 11)
  .set("close", 24)
  .set(true, "We are open")
  .set(false, "We are close");
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); //rest getდან გამოდის true შესაბამისად მნიშვნელობა ენიჭება true-სი.
console.log(rest.has("open")); //ეს ამოწმებს აქვს თუ არა ეს თუ ის მნიშვნელობა
console.log(rest.size); //ეს გებულობს რამდენი ელემენტი იმყოფება map-ში.
rest.clear(); //ეს მთლიანად წაშლა.
//მასივების დროს როგორ ხდება ...
const arr2 = [1, 2];
rest.set(arr2, "test");
console.log(rest.get(arr2)); //ამ დროს კი მივიღებთ - test.

//ქვიზი
const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(question.get(question.get("correct") === answer)); //ამ დროს თუ ჩაწერილი რიცხვი უდრის correct-ს მაშინ გამოდის რომ (correct = 3) არის სწორი პასუხი.

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);
//1
const events = new Set(gameEvents.values()); //value-თი გავიგეთ მნიშვნელობები ხოლო სტით კი მხოლოდ ისინი რომელიც არ მეორდება.
console.log(events);
//2
gameEvents.delete(64);

//3
const time1 = [...gameEvents.keys()].pop(); //ბოლო რიცხვების გაგება
console.log(time1);
console.log(
  `An event happened, on average, every ${time1 / gameEvents.size} minutes`
);

//4
//ამით ჩვენ ვადგენ თუ რომელ ტაიმში მოხდა ეს თუ ის მომენტი
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} half] ${min} :${event}`);
}

const airline = "TAP air portugal";
const plane = "A320";

console.log(airline.indexOf("r")); //რომელი პოზიციის მერე იკავებს ეს ასო ადგილს.
console.log(airline.lastIndexOf("r")); //რომელი პოზიციას იკავებს ეს ასო უკნიდან.
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4)); //ამ პოზიციის მერე წაიკითხავს მნიშვნლოებას

console.log(airline.slice(0, airline.indexOf(" "))); //პირველიდან დაწყებული სფეისამდე დამთავრებული ჩანაწერს აჩვენებს.
console.log(airline.slice(airline.lastIndexOf(" "))); //ამ შემთხვევაში კი უკნიდან იწყებს და სფეისი მერე დარჩენილ სიტყვას წერს.
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //ამ დროს სფეის გამოაკლებს და პირდაპირ დაწერს
console.log(airline.slice(-1)); //ბოლოს გამოგვიტანს

//თვითმფრინავში შუა ადგილების შემოწმება
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  s === "B" || s === "E" ? console.log("Middle seat") : console.log("Lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("9E");
checkMiddleSeat("34A");

console.log(airline.toUpperCase()); // ყველა ასოს დიდად დაწერა
console.log(airline.toLowerCase()); // ყველა ასოს პატარად დაწერა

//დიდი ასოების პატარად შეცვლა მგზავრტა სახელებში
const passenger = "iLiKo";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.toLowerCase(1);
console.log(passengerCorrect); //Iliko

//ლოგინის სწორად დაწერა
const loginEmail = "  Ilikokukava13@gmail.com";
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //გამოტოვებულ ადგილს ავსებს
console.log(trimmedEmail);
//მაგრამ ამის ერთ ზოლში ჩაწერა შესაძლებელია
const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);

//ფულის ვალუტის შეცვლა
const priceGB = "123,56§";
const priceUS = priceGB.replace("§", "$").replace(",", ".");
console.log(priceUS);
//ყველგან რომ შევცვალთ სიტყვა ამისთვის საჭიროა...
const planeAir = "door, door";
console.log(planeAir.replace(/door/g, "gate"));

//Booleans
const airBus = "A320neo";
console.log(airBus.includes("A320"));
if (airBus.startsWith("A") && airBus.endsWith("o")) {
  console.log("This is true");
}

//აეროპორტში დასაშვები ბარგი
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed");
  } else {
    console.log("Your are wellcomed");
  }
};
checkBaggage("i have a laptop, gun");

//split and join
console.log("a+b+c".split("+"));
console.log("Mr Mrs".split(" "));

const [firstName, lastName] = "iliko kukava".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
//პირველი ასოს დიდად დაწერის ფუნქცია და გამოყოფის.
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    console.log(n[0]);
    namesUpper.push(n[0].toUpperCase() + n.slice(1)); //პირველი ხერხით
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //მეორე ხერხით
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("iliko kukava");
capitalizeName("giorgi kukava");

console.log("iliko".padStart(24, "+").padEnd(30, "-")); //უმატებს პლუსებს იმდენჯერ რომ მთელი სიგრძე იყოს 24ის ტოლი.
//მასტერქარდის ბოლო ციფრების დამალვა
const masterCreditCard = function (number) {
  const str = number + " "; //რადგან რიცხვს ვუმატებსთ სტრინგს ის ციფრიც სტრინგად გადაიქცევა.
  const last = str.slice(-4);
  console.log(last);
  console.log(last.padStart(str.length, "*"));
};
masterCreditCard(4577694949293);

//reapeat
const message2 = "There is a bad weather... All Departures Delayed";
console.log(message2.repeat(5));

const planeLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
planeLine(5);

//challange #4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text3 = document.querySelector("textarea").value;
  const rows = text3.split("\n");
  console.log(text3);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
//
const flights2 =
  "_Delayed_Departure;fao93766109;txll2343434;11:25+_Arrival;bru02939;fao28473;11:45";

for (const flight of flights2.split("+")) {
  const [type, from, to, time] = flights2.split(";");
  const output = `${type.replace} ${from} ${to} (${time.replace(":", "h")})`;
}

//
const bookings = [];

const createbooking = function (
  flightNum,
  numPassangers = 1,
  price = 200 * numPassangers
) {
  //აქ ტოლობას იმიტო ვწერთ რომ დაუშვათ თუ ეს პარამეტრები არ არის განსაზღვრული მაშნ ეს მნიშვნელობა მიეცემა
  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createbooking(12);

//
const flight123 = "LH345";
const iliko131313 = {
  name: "iliko kukava",
  passport: 123124452412,
};

const checkIn1 = function (flightNum, passanger) {
  console.log(flightNum);
  passanger.name = "Mr " + passanger.name;
  console.log(passanger);
  if (passanger.passport === 123124452412) {
    console.log("Correct");
  } else {
    console.log("Wrong passport");
  }
};

checkIn1(flight123, iliko131313);

//first-class function
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
//high order functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer("Javascript it the best", upperFirstWord);

//
const kutaisi = {
  airline: "kutaisiAir",
  bookings: [],

  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`);
  },
};

const batumi = {
  name: "tbilisiAir",
  bookings: [],
};
const book = kutaisi.book; //ამით გარეთ გამოვიტანეთ ქუთაისის ეგ მეთოდი

book.call(batumi, 23, "iliko kukava"); //ქოლ მეთოდით შევძლებთ გამოვიყენოთ ქუთაისის მეთოდი
console.log(batumi);

const monacemebi = [25, "diablo kiko"];
book.call(batumi, ...monacemebi);

const bookBA = book.bind(batumi);
bookBA(25, "iakob gegebashvili");

const bookBA1 = book.bind(batumi, 25);
bookBA1("akaki wereteli");

batumi.plane = 300; //თვითფრინავის ბილეთის ყიდვა
batumi.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", batumi.buyPlane.bind(batumi));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 123));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

//15
const poll = {
  question: "What is your favourite programming language?",
  option: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.option.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);
    //Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};
poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults;

//Closure
//Closure - is the closed-over environment of the execution context in which a function was created, even after that execution context is gone.
//Closure - gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
///Closure - makes sure that a function doesnot loose connection to variables that existed at the function's birth place.
//Closure - is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} passangers`);
  };
};
const book1234 = secureBooking();

book1234();

//
let arr1234 = [" a", "b", "c", "d"];
console.log(arr1234.slice(2)); //გამოიტანს მეორე ელემენტის მერე ყველას
console.log(arr1234.slice(2, 4)); // გამოიტანს მეორე და მეოთხე ელემენტებს შორის ყველას
console.log(arr1234.slice(2, -1));
console.log(arr1234.join(" - ")); // თითოეულ ელემენტს გამოყოფს ამ დეფისით

let arr444 = [4, 3, 56];
console.log(arr444[arr444.length - 1]); //ბოლო ციფრის გაგება
console.log(arr444.slice(-1)[0]); //მეორენაირად ბოლო ციფრის გაგება
console.log(arr444.at(-1)); //მესამენაირად ბოლო ციფრის გაგება
//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //აბსოლუტი იმიტომ გამოვიყენეთ რომ უარყოფითი რიცხვი დადებითად წარმოადგინოს
  }
}
//მეორენაირად ამის გაკეთება
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); //აბსოლუტი იმიტომ გამოვიყენეთ რომ უარყოფითი რიცხვი დადებითად წარმოადგინოს
  }
});

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key) {
  console.log(`${key}: ${value}`);
});

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<mtavari>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><
//<<<<<<<M A P >>>>>>>></
const movements33 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementUSD = movements33.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements33);
console.log(movementUSD);
//მეორენაირად arrow function
const movementUSD1 = movements33.map((mov) => mov * eurToUsd);

//map ის საშუალებით ვადგენთ
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdraw"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

//
const user = "Steven Thomas Williams";
const username9 = user.toLowerCase().split(" "); //ამით გამოვყავით სახელები ერთმანეთისგან
console.log(username9);

const createUserName = function (user) {
  const username99 = user
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join(" "); //ამით კი გამოტოვებული რაცაა იმათ შევავასებთ
  return username99;
};

console.log(createUserName("Steven Thomas Williams"));

//<<<<<filter>>>>>>>>>></filter>
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements1.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
//მეორენაირად
const depositsFor = [];
for (const mov of movements1) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
//მესამენაირად
const widhdrawals1 = movements1.filter((mov) => mov > 0);
console.log(widhdrawals1);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<reduce>>>>>>>>>>>>>>>>>>></reduce>
const movements131 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements131.reduce((acc, cur) => acc + cur, 0); //ამ ნულით ჩვენ პირველ მნიშვნელობას ნულს ვანიჭებ და მერე ყველა ემატება თანდათანობით
console.log(balance);
//მეორენაირად
let balance2 = 0;
for (const mov of movements131) balance2 += mov;
console.log(balance2);
//მაქსიმუმის გაგება
const max12 = movements131.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements131[0]);
console.log(max12);

//სამივეს გამოყენება Chaining method
const movements11 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd11 = 1.1;

const totalDepositUsd = movements11
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd11)
  .reduce((acc, mov) => acc + mov, 0); //ნულს იმიტომ ვუმატებთ რომ ლუპის დროს პირველი იყოს ნული
console.log(totalDepositUsd);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<find >>>>>>>>>>>>>>>>>>><
const movements123 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const findFirstNumber = movements123.find((mov) => mov < 0); //find იმით განსხვავდება filter გან რომ ეძებს მხოლოდ პირველ ელემენტს
console.log(findFirstNumber);

//some and every
const movements1234 = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements1234.includes(-400)); //ამით ჩვენ გავიგებთ არის თუ არა ესა თუ ის რიცხვი აქ მოცემული
const anyDeposit = movements1234.some((mov) => mov > 0); // არის თუ არა რაიმე მნიშვნელობა ისეთი რომელიც პირობას აკმაყოფილებს
const everyDeposit = movements1234.every((mov) => mov > 0); //არის თუ არა ყველა მნიშვნელობა ისეთი რომელიც აკმაყოფილებს პირობებს

//flat
const arr12345 = [[1, 2, 3, 4], [5, 6, 7], 8, 9];
console.log(arr12345.flat()); //ყველა მნიშვნელობას ერთ მასივში აქცევს ცალცაკე მნიშვნელობად 1 დონით ქვემოთ
const arr123456 = [[1, [2, 3]]];
console.log(arr123456.flat(2)); //ამ დროს მეორე დონით ხდება შესაბამისად ყველაფერი ერთ მასივში მოხდება

//calculate average age
const calculateAverageAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age <= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//sorting
const abcd = [1, 2, 3, -5, -6, 8]; //ამით ხდება მასივების სწორად დალაგება
abcd.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(abcd);
//////////////////////////////////////////////////////

//oop (object oriented program)

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1997);
console.log(jonas);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

//მეორენაირად, უფრო დალაგებულად
//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const iliko = new PersonCl("iliko", 1998);
iliko.calcAge();

//challange
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};
Car.prototype.accelerate = function () {
  console.log(`${this.make} going at ${this.speed + 10} km/h`);
};
Car.prototype.brake = function () {
  console.log(`${this.make} going at ${this.speed - 5} km/h`);
};

const data11 = new Car("BMW", 130);
const data22 = new Car("Mersedes", 100);

data11.accelerate();
data22.brake();

//მეორენაირად
class Car123 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} going at ${this.speed + 10} km/h`);
  }

  brake() {
    console.log(`${this.make} going at ${this.speed - 5} km/h`);
  }
}

const car1 = new Car123("Jiguli", 90);
const car2 = new Car123("Moskvichi", 70);

car1.accelerate();
car2.brake();

//getters and setters
const account = {
  owner: "iliko",
  movements: [200, 300, 400, 120, 500],

  get latest() {
    return this.movements.slice(-1).pop(); //ბოლო ციფრს გამოიტანს
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

//Object.create  პირიქით ხდება
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);

steven.name = "Steven";
steven.birthYear = 2002; //ეს ორი პარამეტრი რო სწორად ჩაიწეროს პროტოტიპის შიგნით , ეს ნაჩვენებია შემდეგ მაგალითში
steven.calcAge();

//მაგალითი
const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const sarah = Object.create(PersonProto1);
sarah.init("Sarah", 2000);
sarah.calcAge();

//Challange 2
class Car123c {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} going at ${this.speed + 10} km/h`);
  }

  brake() {
    console.log(`${this.make} going at ${this.speed - 5} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedEU(spd) {
    this.speed = spd * 1.6;
  }
}

const car12 = new Car123c("Jiguli", 90);
const car22 = new Car123c("Moskvichi", 70);

console.log(car12.speedUS);
car22.speedEU = 70;
console.log(car22);

//call stack ის გამოყენება
const Person13 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person13.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person13.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person13.prototype); //ეს იმისთვის არის რომ ორი კლასის პროტოტიპები გააერთიანოს და ხელმისავწდომი გახადოს

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study at ${this.course}`);
};

const mike = new Student("MIke", 2020, "Computer science");
mike.introduce();
mike.calcAge();

//challenge 3
const Car13 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car13.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car13.prototype); //ეს იმისთვის არის რომ ორი კლასის პროტოტიპები გააერთიანოს და ხელმისავწდომი გახადოს

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate();

//მეორენაირად შერწყმა ორი პროტოტიპის კლასებში ხდება შემდეგნაირად:
const Person133 = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
};
Person133.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

class StudentCL extends Person133 {
  constructor(fullName, birthYear, course) {
    //always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
}

const martha = new StudentCL("Martha", 1998, "Computer Science");
martha.introduce();
martha.calcAge();

//
class Account {
  //Public fields
  _movement = [];
  //private fields
  #course;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //protected property
    this._movement = [];
  }

  deposit(val) {
    this._movement.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
}

const acc1 = new Account("ilo", "EUR", 1111);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);

//Asynchronous js ასინქტრონული ფუნცქია იმით განსხვავდება ჩვეულებრივისგან რომ ის ელოდება წინამდებარე ფუნცქიას შესრულებას და მერე ახდენს სხვა პროცედურებს

// const request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/name/georgia"); //API
// request.send();

// request.addEventListener("load", function () {
//   const [data] = JSON.parse(this.responseText); //ამით მონაცემები გავპარსეთ და შესაბამისად გამოვიტანეთ კონსოლში
//   console.log(data);

//   const html = `<article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages}</p>
//             <p class="country__row"><span>💰</span>${data.currencies}</p>
//           </div>
//         </article>`;
//   console.log(data.currencies);
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// });
//Object.values(user);

////////////////////////////////////
// const request = fetch("https://restcountries.com/v3.1/name/georgia");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data[0]));
// };

// getCountryData("georgia");

//promise; //ეს ეგრეწოდებული პირობაა რომელიც მომავლიდან აკეტებს გადაწყვეტილებას და თუ წარმატებულია გაუშვებს რესოლვით თუ არადა რეჯექთით
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You Win"); //თუ სწორია მაშინ ეს დაიწერება
    } else {
      reject(new Error("You lost your money")); // თუ არასწორია მაშინ ეს
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res)) //თუ სწორია მაშინ რესოლვში მიცემს უფლებას დაწეროს
  .catch((err) => console.error(err)); //თუ არადა რეჯექთთან გადაინაცვლებს
//
function f1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("This is called function");
    }, 3000);
  });
}

async function f2() {
  console.log("...waiting");
  const result = await f1();
  console.log(result);
}

f2();

//
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data[0]);
};
whereAmI("georgia");
console.log("first"); //აქ პირველი ეს გამოვა რადგან ბექგრაუნდზეა გაშვებული ასინქრონული ფუნცქია ფეტჩის საშუალებით
