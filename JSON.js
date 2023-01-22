let jsonObj = {
    name: "Ankan",
    channel: "AC_",
    friend: "Rohan",
    fruit: "Lemon" 
}
console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj); //convert object to string
console.log(myJsonStr); 
console.log(typeof myJsonStr); 

let myReplacedStr = myJsonStr.replace('Ankan', 'Roni'); 
console.log(myReplacedStr)
console.log(typeof myReplacedStr);

let newJsonObj = JSON.parse(myJsonStr); //convert json-string to object again
console.log(newJsonObj)
console.log(typeof newJsonObj);