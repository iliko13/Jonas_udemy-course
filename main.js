"use strict";
// //1
// function Car(pMake, pModel, pAge) {
//   this.make = pMake;
//   this.model = pModel;
//   this.age = pAge;
//   this.getCarInfo = function () {
//     document.write(
//       "marka" + this.make + "model" + this.model + "age" + this.age
//     );
//   };
// }
// var bmw = new Car("BMW", "e90", 2006);
// document.write(bmw.make);
// document.write(bmw.model);
// document.write(bmw.age);

// //2
// function car(pMake , pModel , pAge) {
//     this.make = pMake;
//     this.model = pModel;
//     this.age = pAge;
// }

// function Person(mName , mYear , mCars) {
//     this.name = mName;
//     this.year = mYear;
//     this.car = mCars;
//     this.drivecar = function(car) {
//         document.write(this.name + "yavs" + car.make)
//     }
//     this.displayInfo = function() {
//         document.write(this.name + "aris" + this.year)
//     }
// }

// var tom = new Person("Tom" , 24 , "BMW");
// tom.displayinfo();
// var bmw = new Car("BMW" , "e90" , 2006);
// tom.drivecar();

// //დავალება წინა
// var movie = {
//     name : "The Dark Knight",
//     Director : "Christoper Nolan",
//     Writers : ["Jonathan Nolan", "Christoper Nolan", "David Goyer"],
//     Stars : ["Christian Bale,", "Heath Ledger", "Aaron Eckhart"],
//     IMDB : "9.0",
//     Budget : "185 000 000",
//     Gross : "1 006 234 167"
// }
// console.log(movie.name) // წერტილის ნოტაციის გამოვიტანე
// console.log(movie["writers"]) //მასივით ინფორმაციის ამოღება
// document.write("<h3>ფილმის ტოპ მსახიობები</h3>")
// for (var i = 0; i < movie.Stars.length; i++) {
//     document.write(movie.stars[i] + "</br>")
// }

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.toString());
console.log(numbers.join("; "));
console.log(numbers.pop());
