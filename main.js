"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var welcome = "welcome typescript";
console.log(welcome);
var num = 20;
var name = "satya";
name.toLowerCase();
num.toString();
var check = true;
var num1 = undefined;
var isNull = null;
var num2 = "satya";
num2 = 45;
num2 = true;
// num2();
var num3 = "satya";
num3 = 45986876;
console.log(num3.toPrecision());
var arr = [1, 3, 2];
var arr1 = [8, 9, 8];
var arr2 = [8, "satya", true, undefined];
var arr3 = ["satya", 89];
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
})(colors || (colors = {}));
var c = colors.green;
console.log(c);
//multitype
var multi;
multi = 34;
multi = "satya";
//functions
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(23, 42);
// function sum1(num1: number, num2: number):number {
//   console.log(num1 + num2);
// }
// sum1(23, 42);
function strsum(str, str2) {
    console.log(str + str2);
}
strsum("satya", "sri");
function paramsopt(str, str2) {
    // console.log(str+str2)
    if (str2) {
        console.log(str + str2);
    }
    else {
        console.log(str);
    }
}
paramsopt("satya");
paramsopt("params", "optional");
function defalut(num1, num2) {
    if (num2 === void 0) { num2 = 80; }
    console.log(num1 + num2);
}
defalut(23);
//Object
function Object1(person) {
    console.log("".concat(person.firstName, ", ").concat(person.lastName));
}
var person = {
    firstName: "satya",
    lastName: "sri",
};
Object1(person);
function details(person) {
    console.log(person.firstName, person.lastName);
}
var p = {
    firstName: "satya",
    //   lastName: "sri",
};
details(p);
//class
var A = /** @class */ (function () {
    function A(name) {
        this.employeeName = name;
    }
    A.prototype.greet = function (name) {
        console.log("Employee ".concat(this.employeeName));
    };
    return A;
}());
var a = new A("satya");
a.greet("sri");
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name) {
        return _super.call(this, name) || this;
    }
    B.prototype.greet = function () {
        console.log(this.employeeName);
    };
    return B;
}(A));
var b = new B("B");
b.greet();
