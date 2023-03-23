"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

//Asynchronous js

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

//promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lotter draw is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You Win");
//     } else {
//       reject(new Error("You lost your money"));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

//
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data[0]);
};
whereAmI("georgia");
console.log("first"); //აქ პირველი ეს გამოვა რადგან ბექგრაუნდზეა გაშვებული ასინქრონული ფუნცქია ფეტჩის საშუალებით
