// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:


const displayDate = () => {

  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numberToString = (inputNum) => {

  console.log("my favorite number is: " + inputNum.toString())

}
numberToString(7)

// Write a JavaScript program to convert a string to the number.

const quantity = "12";

console.log(typeof quantity)

Number(quantity)

console.log(typeof Number(quantity))
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  const rain = "true";
  console.log(rain);
  const a = null;
  console.log(a)
  const car = undefined;
  console.log(car)
  const dog = 56;
  console.log(dog);
  NaN === NaN; false;
  console.log("NaN")
  const color = "yellow";
  console.log(color)
  

  
// Write a JavaScript program that adds 2 numbers together.

const num1 = 5;
const num2 = 3;

const sum = num1 + num2;

console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sum);

// Write a JavaScript program that runs only when 2 things are true.

let condition;

if (1 > 0 && 2 > 1) {
  condition = "Both conditions are true";
}

console.log("Both conditions are true");


// Write a JavaScript program that runs when 1 of 2 things are true.

const balance = 600;
const purse = 300;

if (purse <= balance) {
console.log("You have enough money to buy the purse");
} else {
console.log("You don not have enough money to buy the purse")
}

// Write a JavaScript program that runs when both things are not true. 

if (!1 > 0 && 2 > 1) {
  condition = "Both conditions are not true";
}

console.log("Both conditions are not true");

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
