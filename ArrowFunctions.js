// function greet() {
//     console.log('Good morning');
// }

// let greet =  ()=> {
//     console.log('Good morning');
// }

let greet = () => console.log('Good morning');
greet();

// let sum2 = (a, b)=>{
//     return a+b;
// };

let sum2 = (a, b) => a + b;
let half = a => a / 2;

setTimeout(() => {
    console.log("We are inside settimeout");
}, 3000);

let obj1 = {
    greeting: "Good Morning",
    names: ["Ankan", "Roni", "Susmit", "Babu"],
    speak() {
        this.names.forEach((student) => {
            console.log(this.greeting + " Hello " + student);
        });
    }
}
obj1.speak();