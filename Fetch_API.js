// Callbacks
function firstFunction(parameters, callback) {
  // do stuff
  callback();
}

firstFunction(para, function () {
  // do stuff
  secondFunction(para, function () {
    thirdFunction(para, function () {});
  });
});

// Promises
// 3 states: Pending, Fulfilled, Rejected
const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });

const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
console.log(users);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

// Async / Await
const myUsers = {
  userList: [],
};
const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};
const anotherFunc = async () => {
  const data = await myCoolFunction();
  //console.log(data);
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);

// 2nd parameter of Fetch is a object
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData.joke);

  //   Accept: "text/plain"
  // } });
  // const textJokeData = await response.text();
  // console.log(textJokeData);
};
getDadJoke();

//
const jokeObject = {
  id: "00071TSv4Ed",
  joke: "Why was it called the dark ages? Because of all the knights.",
};
const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse);
};
postData(jokeObject);

//
const requestJoke = async (firstName, lastName) => {
  const response = await fetch(
    `http://api.icndb.com/jokes/random?firstName=${firstName} & lastName=${lastName}`
    // &limitTO=[nerdy]`
  );
  const jsonResponse = await response.json();

  console.log(jsonResponse.value);
  console.log(jsonResponse.value.joke);
};
requestJoke("Clint", "Eastwood");

// abstract into functions

// maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
}

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoked = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
  console.log(joke);
}

// Procedural "workflow" function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoked(requestUrl);
  console.log("finished!");
}
processJokeRequest();
