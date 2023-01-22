const myObject = {
name: "Ankan",
hobbies: ["gardening", "Chess"],
logName: function () { console.log(this.name);
    }
};

const myArray =
["eat","sleep","code"];

// SessionStorage
// sessionStorage.setItem("mySessionStore", myObject);
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// const mySessionData = sessionStorage.getItem("mySessionStore");
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); 

console.log(mySessionData); 
console.log(typeof mySessionData); 

// LocalStorage
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
localStorage.removeItem("myLocalStore");
localStorage.clear();

const key = localStorage.key(0);
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(myLocalData);
console.log(key);
console.log(storeLength);