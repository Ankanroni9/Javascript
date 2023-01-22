// Objects
const person = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
  activeness: function () {
    return `activeness level is ${100 - this.age}`;
  },
};

console.log(person.name);
console.log(person["name"]);
console.log(person.activeness());

console.log(person.hobbies[1]);
console.log(person.address.city);

// Add property
person.email = "jdoe@gmail.com";

// Array of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: false,
  },
  {
    id: 2,
    text: "Dinner with wife",
    isComplete: false,
  },
  {
    id: 3,
    text: "Meeting with boss",
    isComplete: true,
  },
];

console.log(todos[1].text);

//Inheritance
const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

//Key-value
const band = {
  vocal: "Ankan Hazra",
  drum: "John",
  guitar: "David",
  bass: "Dave",
};

delete band.drum;
console.log(band.hasOwnProperty("drum"));

console.log(Object.keys(band));
console.log(Object.values(band));

//destructuring Objects
const { guitar: myVariable1, bass: myVariable2 } = band;
console.log(myVariable1 + myVariable2);

const { vocal, guitar, bass } = band;
console.log(vocal + guitar + bass);

function sing({ vocal }) {
  return `${vocal} sings`;
}
console.log(sing(band));


// Class
class Pizza {
  constructor(pizzaType) {
    this.type = pizzaType;

    this.size = "small";
    this.crust = "original";
    this.toppings = [];
  }

// Encapsulation
  // get pizzaCrust(){
  getCrust() { 
    return this.crust;
  }

  // set pizzaCrust(pizzaCrust){
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(toppings) {
    this.toppings.push(toppings);
  }

  bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
    );
  }
}

const myPizza = new Pizza("pepperoni");
myPizza.type = "supreme";
// myPizza.pizzaCrust = "thin";
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.type);
myPizza.setToppings("sausage");
myPizza.setToppings("olive");
console.log(myPizza.getToppings());

// Inheritance
class SpecialPizza extends Pizza {
  constructor(pizzaType) {
    super(pizzaType);
    this.size = "small";
  }
  taste() {
    console.log(`Our ${this.type} ${this.size} pizza has sausy taste.`);
  }
}

const mySpecialPizza = new SpecialPizza("sausage");
mySpecialPizza.taste();

// Abstraction 
function myPerson(fname,lname){
    let firstname = fname;
    let lastname = lname;
  
    let getDetailsNoaccess = function(){
        return (`First name is: ${firstname} Last 
            name is: ${lastname}`);
    }
  
    this.getDetailsAccess = function(){
        return (`First name is: ${firstname}, Last 
            name is: ${lastname}`);
    }
}
let person1 = new myPerson('Ankan','Hazra');
console.log(person1.firstname);
console.log(person1.getDetailsNoaccess);
console.log(person1.getDetailsAccess());

//Function as Class
function Vehicle(name,maker,engine){
	this.name = name,
	this.maker = maker,
	this.engine = engine
};

Vehicle.prototype.getDetails = function(){
	console.log('The name of the bike is '+ this.name);
}

let bike1 = new Vehicle('Hayabusa','Suzuki','1340cc');
let bike2 = new Vehicle('Ninja','Kawasaki','998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());

// Factory Function
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
  };
}

const yumPizza = pizzaFactory("small");
yumPizza.bake();

// #
class kfcPizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
    );
  }
}

const mykfcPizza = new kfcPizza("large");
mykfcPizza.hereYouGo();
console.log(mykfcPizza.sauce);
