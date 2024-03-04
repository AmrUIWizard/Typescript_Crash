//object type
type Person = {
  readonly id: number; // read-only property that cannot change later
  name: string;
  age: number;
  status: string;
  isMan?: boolean; // we used "?" to make it optional
};
const person: Person = {
  id: 1,
  name: "Johnd",
  age: 19,
  status: "married",
};

//or
const person2: { name: string; age: number; status: string; isMan: boolean } = {
  name: "Johnd",
  age: 19,
  status: "married",
  isMan: true,
};

//any type
let vall: any = "red";
vall = 19;

//functions
const double = (y: number): number => {
  const another: number = 15;
  return another * y;
};

//arrays
//should use only numbers array
const nums: number[] = [1, 2, 3, 4]; //[] Notaion
const numbers: Array<number> = [1, 2, 3, 4]; //Array<type> Notaion
//Hybiry Array
const hybirdArray: (number | string)[] = [1, "Apple", 3];

// Multi dimensiol arrays
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

// object inside function
type User = {
  name: string;
  age: number;
  location: string;
};

const printUser = (user: User) =>
  `Name: ${user.name}
   Location: ${user.location}
   Age: ${user.age}`;

const response = printUser({ name: "Amr", age: 21, location: "Egy" });

//Intersection Types: a way to combine multiple types into a single type
type ThePerson = {
  name: string;
  age: number;
};
type Employee = {
  readonly id: number;
  title: string;
};
type Person_Employee = ThePerson & Employee;

const personWorking: Person_Employee = {
  id: 1,
  name: "Ahmed",
  age: 24,
  title: "Developer",
};

//Unions type: can have one of several possible types
let myVar: number | string = "Amr";
myVar = 17;

// Literla Types: a value can only be one specific literal value
let color: "red" | "blue" | "green";
color = "red";

//Tuples: array with fixed number of elements
let myTuple: [string, number] = ["Amr", 22];
let [myName, myAge] = myTuple;

//Enum: a way to define a collection of related values that used interchangeably
enum WeatherCondition {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
const currentWeather = `The Weather now is ${WeatherCondition.Snowy}`;

//Class Properties
//Access Modifiers: contorl the visibility of class members (Public, Private, Protected)
// 1 -> Public: can be accessed from anywhere
// 2 -> Private: can be accessed within the class scope
// 3 -> Protected: can be accessed by within class scope and the subclasses
class Human {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getPrivateAgeWithName(): string {
    return `Name is ${this.name}, Age is ${this.age}`;
  }
}
const human = new Human("Amr", 22);

//Interface: a way to define  a contract for objects and specifies the properties and their types that object must have
interface Car {
  name: string;
  version: number;
}

const carExample: Car = {
  name: "KIA",
  version: 2019,
};

//Generics: allows us to create reusable components that can work with a variety of types
const printUniqe = <T>(item: T, defalt: T): [T, T] => {
  return [item, defalt];
};
const str = printUniqe<string>("Hello", "World");
const number = printUniqe<number>(5, 8);

//Type Narrowing: the process or refining a variable's type within a coditional clock of code to acieve safe code
type myType = string | number;

const exampleFunction = (value: myType): void => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
};
//comparing between inputs using type narrowing
class Dog {
  bark(): void {
    console.log("Woff Woff");
  }
}
class Cat {
  meow(): void {
    console.log("Meow Meow");
  }
}
const animalSound = (animal: Dog | Cat): void => {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
};
const myDog = new Dog();
const myCat = new Cat();
