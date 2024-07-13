// Activity 1: Variable Declaration

// Task 1:
let number = 18;
console.log(number);

// Task 2;
let str = "Syed Hamza";
console.log(str);

// Activity 2: Constant Declaration

// Task 3

const bool = true;
console.log(bool);

// Activity 3: Data Types

// Task 4
const Bool = true; //boolean
const Num = 95; //number
const Namme = "Hamza"; //string
const arr = [15, "Kiwi", true]; //array object
const obj = { name: "Hamza", age: 19 }; //object
const nulll = null; //object
const unde = undefined; //undefined

console.log(typeof Bool);
console.log(typeof Num);
console.log(typeof Namme);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof nulll);
console.log(typeof unde);


// Activity 4: Reassigning Variables
// Task 5

let names = "Hamza";
console.log(names);
names = "Ali";
console.log(names);

// Activity 5: Understanding const

// Task 6
const err = "abc";
// err = 123;  const variable cannot be changed
console.log(err);

//Feature Request:
//Variable Types Console Log

const myName = "Hamza";
const age = 19;
const residenceOfPakistan = true;
const hobbies = ["football", "Anime","Cricket"];
const food = {
  Breakfast: ["Juice", "Eggs", "Paratha"],
  Lunch: ["Biryani", "Chicken", "Sabzi"],
  Dinner: ["Biryani", "Chicken", "Sabzi"],
};

console.log(myName + ": " + typeof myName);
console.log(age + ": " + typeof age);
console.log(residenceOfPakistan + ": " + typeof residenceOfPakistan);
console.log(hobbies + ": " + typeof hobbies);
console.log(`${food}: ${typeof food}`);

//Reassignment Demo
try {
  let birds = "eagle";
  birds = "sparrow";
  console.log(birds);
} catch (e) {
  console.log("Error: " + e.message);
}

try {
  const teleNumber = "090078601";
  teleNumber = "1234 5678 9013";
  console.log(teleNumber);
} catch (e) {
  console.log("Error: " + e.message);
}
