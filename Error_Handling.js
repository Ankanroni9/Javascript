"use strict";
const makeError = () => {
  try {
    const name = "Dave";

    name = "Joe";

    //throw
    throw new customError("This is a custom error!"); 
  } catch (err) {
    console.log(err);
    console.table(err);
    console.error(err.name);    
    console.error(err.message);    
    console.error(err.stack);
  }
  finally{
    console.log("Bye");
  }
};
makeError();