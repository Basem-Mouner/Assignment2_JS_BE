//-------------------------------------------------------------------------------------------------
"use strict";
//----------------------------------Assignment2 for js QN-(1).----------------------------------------------------------------
//-------1-Write a function that uses a `for` loop to print numbers from 1 to 10. If the number is divisible by 3, skip printing the number.
{
  const userInput1 = document.getElementById("INPUT1");
  const userInput2 = document.getElementById("INPUT2");
  const btn1 = document.getElementById("ACTION1");
  const result = document.getElementById("RESULT1");

  function printWithoutdivByThree(num1, num2) {
    let resultArray = [];
    for (let i = num1; i <= num2; i++) {
      if (i % 3 == 0) {
        continue;
      } else {
        resultArray.push(i);
        console.log(i);
      }
    }
    return resultArray;
  }

  btn1.addEventListener("click", () => {
    console.log(
      printWithoutdivByThree(Number(userInput1.value), Number(userInput2.value))
    );
    result.innerHTML = printWithoutdivByThree(
      Number(userInput1.value),
      Number(userInput2.value)
    );
  });
}

//--------------------------------------------------------------------------------------------------
// //-2-Write a function that uses a `while` loop to calculate the sum of numbers from 1 to 100.
{
  const userInput1 = document.getElementById("INPUT1-Q2");
  const btn1 = document.getElementById("ACTION2");
  const result = document.getElementById("RESULT2");

  function sumByWhile(num) {
    let sum = 0;
    let i = 1;
    while (i <= num) {
      sum += i;
      i++;
    }
    return sum;
  }

  btn1.addEventListener("click", () => {
    console.log(sumByWhile(Number(userInput1.value)));
    result.innerHTML = sumByWhile(Number(userInput1.value));
  });
}

// //--------------------------------------------------------------------------------------------------
// //---3-Implement a function using `forEach` to iterate over an array and print each element.
{
  const userInput1 = document.getElementById("INPUT1-Q3"); //filling your array
  let userInput2 = document.getElementById("INPUT2-Q3"); // display your array
  const btn2 = document.getElementById("ACTION3_Fill"); //btn to fill
  const btn1 = document.getElementById("ACTION3");
  const result = document.getElementById("RESULT3");

  let arrayFill = [];

  function fillingArray() {
    arrayFill.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`; //display
  }

  function printArrayElements(array) {
    array.forEach((element, index) => {
      console.log(`${index} ${element}`);
    });
  }
  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    printArrayElements(arrayFill);
    result.innerHTML = arrayFill;
  });
}

// //--------------------------------------------------------------------------------------------------
// //--4-Explain the difference between `forEach` and `for...of` loops in JavaScript.
{
  /*forEach:
  Use forEach when you need to perform actions on each element of an array
   and don't need to stop or pause the loop.

1- Does not return anything.
 It always returns undefined and is primarily used for side effects 
 like logging or modifying external variables.
 2-You cannot break out of a forEach loop early.
  There is no built-in way to stop the loop or skip to the next iteration, 
 though you can use return inside the callback to skip further execution in that iteration.
 3- does not wait for the promises to resolve before continuing to the next iteration.

 array.forEach((element, index, array) => {
  console.log(element, index, array);
});

 */
  /* for...of:
  Use for...of when you need more flexibility 
  (like breaking, continuing, or handling non-array iterables).

  1- Also doesn't return anything,
 but since it is a loop construct, you can use break and continue statements within it.

 2- You can break out of a for...of loop using the break statement
  or skip to the next iteration using continue.

  3- Works well with async/await since it can handle promises and wait for each iteration 
  to resolve before moving to the next one.
 */
  //ex
  function compare() {
    const array = [10, 20, 30];

    // Using forEach
    array.forEach((element, index) => {
      console.log("forEach:", index, element);
      // we can't use break or continue ans async,await func
    });

    // Using for...of
    for (const element of array) {
      console.log("for...of:", element);
      // we can use break or continue ans async,await func
    }
  }
}

// //--------------------------------------------------------------------------------------------------
// //--5-Write a function that destructures an object to extract values and returns a formatted string.
{
  const userInput1 = document.getElementById("INPUT1-Q5");
  const btn1 = document.getElementById("ACTION5");
  const result = document.getElementById("RESULT5");

  function formatObject({ name, age }) {
    return ` ${name} is ${age} Years old`;
  }

  btn1.addEventListener("click", () => {
    let myObject;

    if (myObject == undefined || myObject == null) {
      // default object
      myObject = { name: "John", age: 30 };
    } else {
      //convert stringfy format json to real object
      myObject = JSON.parse(userInput1.value);
    }

    console.log(formatObject(myObject));
    result.innerHTML = `${formatObject(myObject)}`;
  });
}

// //--------------------------------------------------------------------------------------------------
// //--6-Use the spread operator to merge two arrays, then return the merged array.
{
  const userInput1 = document.getElementById("INPUT1-Q6");
  let userInput2 = document.getElementById("INPUT2-Q6");
  const btn2 = document.getElementById("ACTION6_Fill");
  const userInput3 = document.getElementById("INPUT3-Q6");
  let userInput4 = document.getElementById("INPUT4-Q6");
  const btn3 = document.getElementById("ACTION6_Fill2");
  const btn1 = document.getElementById("ACTION6");
  const result = document.getElementById("RESULT6");

  let arrayFill1 = [];
  let arrayFill2 = [];
  function fillingArray() {
    arrayFill1.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill1}]`;
  }
  function fillingArray2() {
    arrayFill2.push(Number(userInput3.value));
    userInput3.value = "";
    userInput4.value = `[${arrayFill2}]`;
  }

  function Merge(arr1, arr2) {
    return [...arr1, ...arr2];
  }

  btn2.addEventListener("click", fillingArray);
  btn3.addEventListener("click", fillingArray2);
  btn1.addEventListener("click", () => {
    console.log(Merge(arrayFill1, arrayFill2));
    result.innerHTML = Merge(arrayFill1, arrayFill2);
  });
}
// //--------------------------------------------------------------------------------------------------
// //-7-Write a function that accepts multiple parameters (two or more) and returns their sum
{
  const userInput1 = document.getElementById("INPUT1-Q7");
  let userInput2 = document.getElementById("INPUT2-Q7");
  const btn2 = document.getElementById("ACTION7_Fill");
  const btn1 = document.getElementById("ACTION7");
  const result = document.getElementById("RESULT7");

  let arrayFill = [];

  function fillingArray() {
    arrayFill.push(Number(userInput1.value));
    userInput1.value = "";
    userInput2.value = `[${arrayFill}]`;
  }

  function multibleSum([...alldata]) {
    // console.log(alldata);
    let sum = 0;
    for (let index = 0; index < alldata.length; index++) {
      sum += alldata[index];
    }
    return sum;
  }

  btn2.addEventListener("click", fillingArray);
  btn1.addEventListener("click", () => {
    console.log(multibleSum(arrayFill));
    result.innerHTML = multibleSum(arrayFill);
  });
}

// //--------------------------------------------------------------------------------------------------
// //--8-Compare primitive and non-primitive data types in JavaScript with examples..
{
  /*
1. Primitive Data Types
    Primitive data types are simple data types that store single values.
      They are immutable, meaning their values cannot be changed once set. 
      However, operations on them result in the creation of new values.

Characteristics of Primitive Types:
    Immutability: You cannot alter the original value; operations return new values.
    Stored by value: When you assign a primitive type, its value is copied.
    Fixed size: They have fixed sizes in memory.

      JavaScript has the following primitive types:
Number: Represents numeric values (both integers and floating-point numbers).
String: Represents sequences of characters (text).
Boolean: Represents two values: true and false.
Undefined: A variable that has been declared but has not been assigned a value.
Null: Represents the intentional absence of any object value.
Symbol: Represents unique and immutable values used as object keys.
BigInt: Used to represent integers larger than Number.MAX_SAFE_INTEGER.
*/

  //example Primitive
  {
    // Number
    let age = 30;

    // String
    let name = "Alice";

    // Boolean
    let isActive = true;

    // Undefined
    let job;

    // Null
    let emptyValue = null;

    // Symbol
    const uniqueId = Symbol("id");

    // BigInt
    let largeNumber = BigInt(9007199254740991);
    //ex
    let a = 10;
    let b = a; // b is a copy of a
    b = 20;
    // console.log(a); // Output: 10 (a is not affected by changes in b)
  }

  /*
  2. Non-Primitive Data Types (Reference Types):
    Non-primitive data types store collections of values or more complex entities.
     These types are mutable, meaning their values can be changed.
     
     Mutability: You can modify the contents of these types after creation.
     Stored by reference: When you assign a non-primitive type, only a reference to the memory location is copied, not the actual value.
     Variable size: The size in memory can change.

     In JavaScript, non-primitive types include:
      Object: A collection of key-value pairs.
       Array: An ordered list of values.
     Function: A reusable block of code.
         Date: A specific date and time.
   */

  //example Non-Primitive
  {
    // Object
    let person = {
      name: "Alice",
      age: 30,
    };

    // Array
    let numbers = [1, 2, 3, 4];

    // Function
    function greet() {
      console.log("Hello, World!");
    }

    // Date
    let today = new Date();
    //example
    let obj1 = { name: "Alice" };
    let obj2 = obj1; // obj2 references the same object
    obj2.name = "Bob";
    // console.log(obj1.name); // Output: Bob (both obj1 and obj2 refer to the same object)
    //to solve this do  deep copy by spreed operator or  structuredClone
  }
}
// //--------------------------------------------------------------------------------------------------
// //--9-Explain how hoisting works in JavaScript and describe the Temporal Dead Zone (TDZ)..
{
  /*
  Hoisting in JavaScript:
    Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top
     of their containing scope (either function or global scope) during the compilation phase,
      before the code is executed. 
      This means that variables and functions can be referenced before they are declared in the code.

         However, only declarations are hoisted, not initializations.
          If you try to access a variable before it’s initialized,
           its value will be undefined for var variables,
            but it will throw an error for let and const variables.
  */
  {
    /*
    The declaration var a is hoisted to the top of the scope,
    but its initialization a = 5 happens at the line where it's defined.
    Function declarations are fully hoisted,
     meaning you can call a function before its declaration in the code:
    */
    // console.log(a); // Outputs: undefined
    var a = 5;
    // console.log(a); // Outputs: 5

    // hoistedFunction(); // Outputs: "This function is hoisted!"

    function hoistedFunction() {
      console.log("This function is hoisted!");
    }
  }

  /*
  Temporal Dead Zone (TDZ):
       The Temporal Dead Zone (TDZ) is the period between entering a scope and 
       the point where a variable declared with let or const is initialized.
        During this phase, the variable is in an uninitialized state and accessing 
        it will throw a ReferenceError.

      Variables declared with let and const are hoisted but are not initialized 
      to undefined like var variables. 
      They remain in the TDZ from the start of the block until the line where they are initialized
  */
  {
    /*
    Here, b is hoisted but is not accessible until the line let b = 10;
     is executed, which marks the end of the TDZ.
    */
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 10;
    // console.log(b); // Outputs: 10
  }
}

// //--------------------------------------------------------------------------------------------------
// //-10-Write a function that demonstrates closure by creating a counter function that returns the number of times it has been called.
{
  function createCounter() {
    let count = 0; // This variable is enclosed in the closure
    let y = 555;
    return function () {
      count++; // Each time the returned function is called, it increments the count
      return count;
    };
  }

  let closureCount = createCounter();
  // console.dir(closureCount);

  // console.log(closureCount());
  // console.log(closureCount());
  // console.log(closureCount());
}

// //--------------------------------------------------------------------------------------------------
// //-11-Create a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function delayedSuccess() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000); // Delay of 3 seconds
  });
}
{
  delayedSuccess()
    // .then((message) => console.log(message)) // Output after 3 seconds: "Success"
    .catch((err) => console.log(err));
}

// //--------------------------------------------------------------------------------------------------
// //-12-Convert the previous promise-based function to use `async` and `await`.
{
  async function delayedSuccessAsync() {
    const message = await delayedSuccess();
    // console.log(message);
  }
  delayedSuccessAsync();
}

// //--------------------------------------------------------------------------------------------------
// //-13-Create a function that returns a promise, which resolves if a random number is greater than 5, otherwise it rejects.
{
  function randomNumberCheck() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
      if (randomNumber > 5) {
        resolve(`Success! The number ${randomNumber} is greater than 5.`);
      } else {
        reject(`Failure! The number ${randomNumber} is not greater than 5.`);
      }
    });
  }

  // Usage example:
  randomNumberCheck()
    .then((message) => {
      // If resolved, this will run
      //  console.log(message);
    })
    .catch((error) => {
      // If rejected, this will run
      //  console.error(error);
    });
}

// //--------------------------------------------------------------------------------------------------
// //-14-Implement a function that chains multiple .then() handlers to a promise to demonstrate promise chaining.
{
  //ex1

  function one() {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        console.log("one");
        if (resolve) {
          resolve();
        }
        if (rejected) {
          rejected("Error in one");
        }
      }, 3000); // Delay of 3 seconds
    });
  }

  function two() {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        console.log("two");
        if (resolve) {
          resolve();
        }
        if (rejected) {
          rejected("Error in two");
        }
      }, 2000); // Delay of 2 seconds
    });
  }

  function three() {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        console.log("three");
        if (resolve) {
          resolve();
        }
        if (rejected) {
          rejected("Error in three");
        }
      }, 1000); // Delay of 1 seconds
    });
  }

  one()
    .then(() => two())
    .then(() => three())
    .catch((err) => console.log(err));

  //ex 2
  // function multiplyByTwo(value) {
  //   return new Promise((resolve) => {
  //     resolve(value * 2);
  //   });
  // }

  // function addTen(value) {
  //   return new Promise((resolve) => {
  //     resolve(value + 10);
  //   });
  // }

  // function subtractFive(value) {
  //   return new Promise((resolve) => {
  //     resolve(value - 5);
  //   });
  // }

  // Promise chaining example
  // multiplyByTwo(5)
  //   .then((result) => {
  //     console.log(`After multiplying by 2: ${result}`); // Output: 10
  //     return addTen(result); // Pass result to the next .then() handler
  //   })
  //   .then((result) => {
  //     console.log(`After adding 10: ${result}`); // Output: 20
  //     return subtractFive(result); // Pass result to the next .then() handler
  //   })
  //   .then((result) => {
  //     console.log(`After subtracting 5: ${result}`); // Output: 15
  //   })
  //   .catch((error) => {
  //     console.error(error); // Handle any errors in the chain
  //   });
}

// //--------------------------------------------------------------------------------------------------
// //-15-Implement a function that handles errors using `try...catch` in an asynchronous operation.
{



//ex1____________________________________
  async function getRecipes(recipe) {
      try {
          var response = await fetch(`htts://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`, {
              cache: "default",
              // headers: { token: hhhh },
          })
          var finalData = await response.json();
        let allRecipes = finalData.data.recipes;
        console.log(allRecipes);
        
      } catch (error) {
         console.log("error here");
      } finally {
          console.log('welldone');
      }
  }
  // getRecipes("salad");
// _____________________________________________________________________________

//ex2___________________________________________
  function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., API request)
      const success = Math.random() > 0.5; // Randomly succeed or fail
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000); // Simulate 2-second delay
    });
  }

  async function getData() {
    try {
      const result = await fetchData();
      console.log(result); // If the promise resolves successfully
    } catch (error) {
      console.error("Error:", error); // If the promise rejects with an error
    }
  }

  // Usage example:
  // getData();
// _______________________________________________________________
}

// //--------------------------------------------------------------------------------------------------
//*************************************************************************************************
//---------------------------------END OF ASSIGNMENT THANK YOU-------------------------------------
//*************************************************************************************************
//********************************Dev by Basem mouner rizk**********************************************
