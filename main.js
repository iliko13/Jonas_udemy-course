"use strict";

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<mtavari>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><
//<<<<<<<M A P >>>>>>>></
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementUSD);
//მეორენაირად arrow function
const movementUSD1 = movements.map((mov) => mov * eurToUsd);

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
