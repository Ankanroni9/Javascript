// setTimeout alllows us to run the function once after the interval of time
// clearTimeout alllows us to run the function repeatedly after the interval of time

function greet(name, byeText) {
    console.log("Hello Good Morning " + name + " " + byeText);
}
timeoutId = setTimeout(greet, 5000, "Ankan", "Take Care");  //not greet()
console.log(timeoutId);

clearTimeout(timeoutId);

// intervalId = setInterval(greet, 1000, "Harry", "Good Night");
// clearInterval(intervalId);

function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000)