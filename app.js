console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1
let favoriteNumber = 1234

let guess = window.prompt("Please pick a number.");

  if (guess == favoriteNumber) {
    console.log("Correct!");
  } else if (guess < favoriteNumber) {
    console.log("Too low!");
  } else if (guess > favoriteNumber) {
    console.log("Too High!")
  } else {
    console.log("Only input numbers please!")
  }

//Exercise 2

 let birthMonth = window.prompt("What is your birth month?(First letter should be capitalized! Example: October")

 switch (birthMonth) {
  
  case "January":
    console.log("Winter");
      break;
  case "February":
    console.log("Winter");
      break;
  case "March":
    console.log("Winter");
      break;
  case "April":
    console.log("Spring");
      break;
  case "May":
    console.log("Spring");
      break;
  case "June":
    console.log("Spring");
      break;
  case "July":
    console.log("Summer");
      break;
  case "August":
    console.log("Summer");
      break;
  case "September":
    console.log("Summer");
      break;
  case "October":
    console.log("Fall");
      break;
  case "November":
    console.log("Fall");
      break;
  case "December":
    console.log("Fall");
      break;
 }

 // Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = window.prompt("Please Pick a Type")
let color = window.prompt("Please Pick a Color")
let size = window.prompt("Please Pick a Size")

switch (typeId) {
  case "01":
    type = "Tank top";
      break;
  case "02":
    type = "T-Shirt";
      break;
  case "03":
    type = "Long Sleeve";
      break;
  case "04":
    type = "Sweat Shirt";
      break;
  default:
    type = "Other";
      break;
}

switch (colorId) {
  case "BL":
    type = "Black"
      break;
  case "BLU":
    type = "Blue"
      break;
  case "RD":
    type = "Red"
      break;
  case "PU":
    type = "Purple"
      break;
  default:
    type = "White";
      break;
}

switch (sizeId) {
  case "S":
    type = "Small"
      break;
  case "M":
    type = "Medium"
      break;
  case "L":
    type = "Large"
      break;
  case "XL":
    type = "Extra Large"
      break;
  default:
    type = "One Size Fits All"
      break;
}

console.log(`Product: ${size} ${color} ${type}`);