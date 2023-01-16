"use strict";
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
    if ( avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if ( avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else  {
        console.log(`No team wins`);
    }
    
}

checkWinner(averageDolphins, averageKoalas);



//2

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
console.log(total);



//3

const myCountry = {
    country: "Georgia",
    capital: "Tbilisi",
    language: "Georgian",
    population: 3.5,
    neighbours: ["Armenia", "Azerbaijan", "Russia", "Turkey"],

    describe: function() {
        return (`${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    }
}
console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
console.log(myCountry.describe());


//4

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcMBI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcMBI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
mark.calcMBI();
john.calcMBI();

console.log(mark.BMI, john.BMI);
console.log(`${john.BMI > mark.BMI ? "John's BMI is higher than Mark's" : "Mark's BMI is higher than John's" }`);

if(mark.BMI > john.BMI) {
    console.log(`${mark.fullName} BMI is higher (${mark.BMI}) than john's (${john.BMI})`);
} else {
    console.log(`${john.fullName} BMI is higher (${john.BMI}) than john's (${mark.BMI})`);
}


//5

const years = [1996, 1997, 2000, 2027];
const ages = [];
const ages2 = [];

for(let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i]; 
    ages2.push(2037 - years[i]);
}

console.log(ages);
console.log(ages2);


//6
const population = [3.5, 7, 13, 350];
const percentages2 = [];
const percentageOfWorld1 = function(people) {
    return people / 7900 * 100;
}

for(let i = 0; i < population.length; i++) {
    const perc = percentageOfWorld1(population[i]);
    percentages2.push(perc); // an meorenariad percentage2 [i] = perc;
}
console.log(percentages2);


//7
const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];
console.log(listOfNeighbours [0] [0]);

for(let i = 0; i < listOfNeighbours.length; i++) {
    for(y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i] [y]}`);
}

//8  while loop
const population1 = [3.5, 7, 13, 350];
const percentage3 = [];
const percentageOfWorld2 = function(people) {
    return people / 7900 * 100;
}


i = 0;
while(i < population1.length) {
    const perc = percentageOfWorld2(population1[i]);
    percentage3.push(perc);    
    i++;
}
console.log(percentage3);


//9
const calcTip1 = bill => bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips1 = [];
const totals = [];

for(let i = 0; i < bills.length; i++) {
    const calc = calcTip1(bills1[i]);
    tips1[i] = calc;
    // tips.push(calc);
    totals[i] = calc + bills1[i]; 
}
console.log(tips1);
console.log(totals);

const calvAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
calvAverage(bills1);
