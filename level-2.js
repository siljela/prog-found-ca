/* 
question 1: Using the loop from question 5 above, only log the counter variable if it is an even number.
Hint: you can use the modulus % operator for this.
*/

// from level 1 - question 5: Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for (var count = 15; count <= 25; count++) {
  if (count % 2 === 0) {
    console.log(count);
  }
}

/*
question 2: Create a function that logs the sentence "I am a function".
Assign this function to a variable called innerFunction.
Create another function called outerFunction that accepts one argument.
Inside outerFunction, call the argument like you would a function - with parenthesis ().
Call outerFunction and pass in the innerFunction variable.
*/

function textfield() {
  console.log("I am a function");
}

var innerFunction = textfield();

function outerFunction() {
  textfield();
}
outerFunction(innerFunction);
