//<script defer src= "./script.js"></script>
//<script type="module" src= "./script.js"></script>

//This is a comment

// Variable
var a = 78;
var b = "Ankan";
c = 34.55;
// console.log(c);

// Data Types
let myVar0 = 34;
myVar0 = 32;

let myVar1 = 5.6;
let myVar2 = "string";
let myVar3 = true;
let myVar4 = null;
let myVar5 = undefined;
let z;
console.log(typeof z);
typeof(53);
typeof('Ankan');

// Operators
//unary operator
c = -c;
// console.log(c);

//binary operator
c = 456 + 8;
// console.log(c);

// Arithmetic operators in action in JavaScript
var num1 = 2;
var num2 = 9;

console.log("The value of num1 + num2 is " + (num1 + num2));
console.log("The value of num1 - num2 is " + (num1 - num2));
console.log("The value of num1 * num2 is " + (num1 * num2));
console.log("The value of num1 / num2 is " + (num1 / num2));
console.log("The value of num1 ** num2 is " + (num1 ** num2));
console.log("The value of num1++ is " + (num1++));
console.log("The value of ++num1 is " + (++num1));
console.log("The value of num1-- is " + (num1--));
console.log("The value of --num1 is " + (--num1));

// Let
// var string1 = "This is a string";
// var string1 = "This is a string2";
// console.log(string1);
// let a = "u";
// {
// let a = "u6";
// console.log(a)
// }
// console.log(a)

// Const
// const a = "This cannot be changed";
// a = "I want to change this, but this cannot be changed";
// console.log(a);

// If-ElseIf-Else Ladder
// let age = 5;
// if(age>18){
//     console.log("You can drink water");
// }
// else if(age === 2){  //===checks equality with data types also
//     console.log("Age is 2")
// }
// else if(age==5){  //==checks only equality
//     console.log("Age is 5")
// }
// else{
//     console.log("You can drink Cold Drink");
// }

// Switch Case
const cups = 47;
switch (cups) {
    case 4:
        console.log("The value of cups is 4")
        break;

    case 41:
        console.log("The value of cups is 41")
        break;

    case 42:
        console.log("The value of cups is 42")
        break;

    case 43:
        console.log("The value of cups is 43")
        break;

    default:
        console.log("The value of cups is none of 4, 41, 42, 43")
        break;
}

// Ternary operator / Shorthand if
color = "blue";
const colorValue1 = color === "red" ? 10 : 20;
const colorValue2 = color !== "red" ? 10 : 20;

let pen = "Cello pinpoint";
let flag = false;
let soupAccess = flag
? "Sorry, no pen for you!"
: pen
? `Yes, we have ${pen} today.`
: "Sorry, no pen today.";
console.log(soupAccess);

// Nullish coalescing operator 
let myName = prompt("Please enter your name");
console.name(myName ?? "You didn't enter your name");

if(myName)
  console.log(myName);
else
  console.log("You didn't enter your name");

// Numbers
const myString = "34";
console.log(myString + 4);

console.log(Number(myString) + 4);
console.log(Number("Ankan"));
comsole.log(Number(false));

// Function
function greet(name, greetText = "Greetings from JavaScript") {
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}

let name1 = "Ankan";
let name2 = 'Roni';
let greetText1 = "Good Morning";
greet(name1, greetText1);
greet(name2, greetText1);

let returnVal = sum(1, 2, 3);
console.log(returnVal)

// Scope
let sc1 = 6;
let sc2 = 14;
console.log(sc1);
console.log(sc2);

function scope1(){
  var sc1 = 10;
  const sc2 = 5;
  {
    var sc1 = 45;
    let sc2 = 34;
    console.log(sc1);
    console.log(sc2);
  }
  console.log(sc1);
  console.log(sc2);
}

// For Loop
// let i = 0;
// for(i=0; i<3;i++){
//     console.log(i);
// }

let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "SkillF"];
// for (let index = 0; index < friends.length; index++) {
//     console.log("Hello friend, " + friends[index]);
// }

let employee = {
    name: "Ankan",
    salary: 2000,
    channel: "AC"
}
 
for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`);
}

// While loop
let i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`);
    i++;
}

// Do while loop
let j = 34;
do {
    console.log(`${j} is less than 4 and we are inside do while loop`);
    j++;
} while (j < 4);

