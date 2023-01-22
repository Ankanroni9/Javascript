// Browser events:{
// click
// contextmenu
// mouseover / mouseout
// mousedown / mouseup
// mousemove
// submit
// focus
// DOMContentLoaded
// transitionend }


// Mouse Event
let para = document.getElementById('para');
para.addEventListener('mouseover', function run() {
    console.log('Mouse Inside')
});

para.addEventListener('mouseout', function run() {
    console.log('Mouse now went outside')
});


function toggleHide() {  //onclick= "toggleHide()"
    // let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if (para.style.display != 'none') {
        para.style.display = 'none';
    }
    else {
        para.style.display = 'block';
    }
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target.className);
  document.getElementById("my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
});

// Keyboard Event
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", (e) => {
  document.querySelector(".container").append(nameInput.value);
});

//event.preventDefault();
searchBtn.addEventListener('click', function(e){
    e.preventDefault();
});