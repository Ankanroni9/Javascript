//Document Object Model 
let main = document.getElementById('main');
console.log(main);
let nav = document.getElementsByClassName('navbar');
console.log(nav);
let divi = document.getElementsByTagName("div");
console.log(divi);

document.firstElementChild.lastElementChild.firstElementChild;

document.querySelector("li a");
document.querySelector("li.item");
let sel = document.querySelector('#nav>li');

const evenDivs = divi.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);

document.querySelectorAll("#list .item")[2].style.color = "blue";

document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "18rem";
document.querySelector("h1").style.padding = "30%";
document.querySelector("h1").style.visibility = "hidden";
document.querySelector("btn").style.backgroundColor = "yellow";

document.querySelector("btn").classList;
document.querySelector("btn").classList.add("invisible");
document.querySelector("btn").classList.remove("invisible");
document.querySelector("btn").classList.toggle("invisible"); //true/false

document.querySelector("h1").innerHTML;
document.querySelector("h1").textContent;
document.querySelector("h1").innerHTML = "<em>Good Bye</em>";
document.querySelector("h1").textContent = "Hello";

document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");

let heading = document.createElement("h3");
heading.innerText = "Did you mean?";
notFound.appendChild(heading);

//remove
while (view.lastChild){
  view.lastChild,remove();
}
//apend
parent.append(newDiv);
//create
for(let i = 1; i<= 10; i++){
  createDivs(view,i);
}