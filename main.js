const restaurant = {
  name: "Classico Italiano",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.categories[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const name1 = ([x, y, z] = arr);
console.log(name1);

let [first, second] = restaurant.categories;
console.log(first, second); // magram tu gamotovebit gvinda pirveli da mesame monacemi ...
const [pirveli, , mesame] = restaurant.categories;
console.log(pirveli, mesame);

// magalitistvis gvinda mati mnisvhnelobebis shecvla
const temp = first;
first = second;
second = first;
console.log(first, second);
// amis shecvla meorenairadac shesadzlebelia
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
