// Array
// let names = [1, 3.6, "Roni", "Ankan", undefined];
//Add value
// names[5]= 6.7;
// console.log(names[2]);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers, names);

// let names = new Array(41, 2, 4, "Ankan", undefined);

let fruits = new Array(5);
console.log(fruits.length);
fruits = fruits.sort();

//Add to last
fruits.push("Oranges");
fruits.push("Apples");
fruits.push("Bananas");
fruits.push("Pomegranate");
fruits.push("Cucumber");
fruits.push("Almond");

//Add to begin
fruits.unshift("Mangos");

const firstItem = fruits.shift();
console.log(firstItem);

//Remove last elements
fruits.pop();

delete fruits[2];

fruits.splice(1, 1);
fruits.splice(1, 1, 47);
fruits.splice(1, 0, 43);
console.log(fruits);

//reverse
fruits.reverse();
console.log(fruits);

// Check if array
console.log(Array.isArray(fruits));

// Get index
console.log(fruits.indexOf("Mangos"));
console.log(fruits);

//join, split
const myArray = ["A", "B", "C", "D", "E", "F"];
const newString = myArray.join();

const newArray = newString.split(",");
console.log(newArray);

//concat
const arr1 = ["A", "N", "K"];
const arr2 = ["A", "N"];
// const newArr = arr1.concat(arr2);
// const newArr = [...arr1, ...arr2];
const newArr = [arr1, arr2];

console.log(newArr);
