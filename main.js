"use strict";
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

const data1 = new Car("BMW", 130);
const data2 = new Car("Mersedes", 100);

data1.accelerate();
data2.brake();

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
