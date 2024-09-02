export {};
let welcome = "welcome typescript";
console.log(welcome);

let num: Number = 20;
let name: String = "satya";
name.toLowerCase();
num.toString();
let check: Boolean = true;

let num1: undefined = undefined;
let isNull: null = null;

let num2: any = "satya";
num2 = 45;
num2 = true;
// num2();

let num3: unknown = "satya";
num3 = 45986876;
console.log((num3 as Number).toPrecision());

let arr: Array<Number> = [1, 3, 2];
let arr1: number[] = [8, 9, 8];
let arr2: Array<any> = [8, "satya", true, undefined];
let arr3: [string, number] = ["satya", 89];

enum colors {
  red,
  green,
  blue,
}
let c: colors = colors.green;
console.log(c);

//multitype
let multi: number | string;
multi = 34;
multi = "satya";

//functions

function sum(num1: number, num2: number) {
  console.log(num1 + num2);
}
sum(23, 42);
// function sum1(num1: number, num2: number):number {
//   console.log(num1 + num2);
// }
// sum1(23, 42);

function strsum(str: string, str2: string) {
  console.log(str + str2);
}
strsum("satya", "sri");

function paramsopt(str: String, str2?: string) {
  // console.log(str+str2)
  if (str2) {
    console.log(str + str2);
  } else {
    console.log(str);
  }
}
paramsopt("satya");
paramsopt("params", "optional");

function defalut(num1: number, num2: number = 80) {
  console.log(num1 + num2);
}
defalut(23);

//Object

function Object1(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName}, ${person.lastName}`);
}
let person = {
  firstName: "satya",
  lastName: "sri",
};
Object1(person);

//if you want to pass same object to multiple functions than this process  makes code clumsy and worse

//for that we have to create the interfece
//create the interface of the person object and use that interface

interface Person {
  firstName: String;
  lastName?: String;
}

function details(person: Person) {
  console.log(person.firstName, person.lastName);
}
let p = {
  firstName: "satya",
  //   lastName: "sri",
};

details(p);

//class

class A {
  employeeName: String;
  constructor(name: String) {
    this.employeeName = name;
  }
  greet(name: String) {
    console.log(`Employee ${this.employeeName}`);
  }
}
let a = new A("satya");
a.greet("sri");

class B extends A {
  constructor(name: string) {
    super(name);
  }
  greet() {
    console.log(this.employeeName);
  }
}
let b = new B("B");
b.greet();
