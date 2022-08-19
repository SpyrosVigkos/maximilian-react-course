//Primitives: number, string, boolean
//More complex types: Arrays, objects
//Function types, parameters

//Primitives
let age: number;

age = 12;

let userName: string;

let isInstructor: boolean;

isInstructor = true;

// More colpmex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Spyros",
  age: 33,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

//Type inference

let course: string | number = "React - The complete Guide";

course = 12345;

//Functions and Types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics
function instertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const stringArray = instertAtBeginning(["a", "b", "c"], "d");

const updatedArray = instertAtBeginning(demoArray, -1); // [-1,1,2,3]
