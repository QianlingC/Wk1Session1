// alert("Hi");
//document.write('Today, we are learning js'); - testing purposes
// console.log("this is eunice"); //debugging purposes

// Variables
var firstName = "alina"; // declaration and initialisation

//don't separate it to 2 lines
var lastName; // declaration
//console.log(lastName); - undefined (value not being assigned)
lastName = "joe"; //initialization

//declare the mulitiple varaibles in the single statement.
var person = "alex",
  age = 30,
  designation = "developer";

//wrong
//var var = 20;

//Data Types
//String

var first = "alina";
var last = "harry";
console.log(first.length); //length of the string

//index/position starts from 0
var str =
  "front-end developement:html, css, js are the basic technologies of front-end";
console.log(str.length); //spaces also counted in

//search in string
console.log(str.indexOf("end", 13)); // return the index/position of first occurence of the specification
//optional - second parameter

console.log(str.lastIndexOf("end"));
console.log(str.indexOf("hello")); //-1
console.log(str.search("end"));

//extraction of strings
console.log(str.slice(2, 7)); //return the string from 2nd index till 6th index
console.log(str.slice(7)); //return the string from the 7th index till the end
console.log(str.trim());
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace("end", "END"));
console.log(str.replaceAll("end", "END"));

//Number
var num = 20;
var numTwo = 20.87;

console.log(typeof num);

//number to string
console.log(num.toString()); //'20'
console.log(num.toFixed(2)); //'20.00'

//convert string to number
console.log(Number("8989")); //8989
console.log(Number("uirif")); //NaN - not a number (illegal number)
console.log(Number("")); //0
console.log(parseInt("89.67")); //89
console.log(parseFloat("89")); //

//boolean
console.log(20 > 9); //true
console.log(20 < 8); //false

//undefined (absent value)
var x;
console.log(x); //undefined
console.log(typeof x); //undefined

// x = 20;

//null (no value or empty value)
var y = null;
console.log(y); //null
console.log(typeof null); //object

console.log(x == y); //comparing value only - true
console.log(x === y); //comparing data type and value - false

//objects - 4 ways to create a object
//1. Object Literal - key/value pair
//property value pair
var person = {
  firstName: "alex",
  age: 35,
  salary: 9000,
};

//to access the value of object
console.log(person.firstName);
console.log(person.age);
console.log(person["age"]);

var car = {
  model: "val",
  color: "red",
  numberPlate: 9000,
  brand: "renault",
  capacity: 990,
  diesel: true,
  specialFeature: {
    autoDriving: true,
  },
};

//2 way
var obj = Object.create(car); //create a new object
console.log(obj.model);
console.log(obj.specialFeature);

console.log(typeof obj);
console.log(typeof car);

//3 way new keyword - Prototype
// var objVal = new Student();

//4 way new keyword - Class
// var objVal = new University();

// properties & values display
console.log(Object.keys(car));
// values display only - no properties will be shown
console.log(Object.values(car));

//updation
car.model = "abc";
console.log(car);

//Arrays
//index/position starts from 0
var num = [90, 89, 67, 56]; //array of number
var color = ["pink", "red", "orange", "blue"]; //array of strings
var mix = [90, "color", null, true, false, [989, 8990]];

console.log(num.length);

console.log(typeof num);
console.log(mix);
console.log(color[1]);

//verification of array
console.log(Array.isArray(num));

//convert array to string
console.log(color.join("*"));

//pop & push
color.pop(); //delete last element from an array
console.log(color);

color.push("white"); //add element in the end of an array
console.log(color);

//shift & unshift
color.shift(); // deletes start element from an array
console.log(color);

color.unshift("black"); //add element in the beginning of an array
console.log(color);

//splice : add & delete element in between of an array
color.splice(1, 2, "blue", "yellow"); //start of index, num of elements
console.log(color);

color.splice(3, 0, "pink");
console.log(color);

color.splice(2, 1);
console.log(color);

//concat
var newArr = mix.concat(num, color);
console.log(newArr);

//array of objects (IMP)
//employee data

var employeeData = [
  {
    name: "alex",
    age: 20,
    salary: 900890,
  },
  {
    name: "harry",
    age: 22,
    salary: 907267,
  },
  {
    name: "alina",
    age: 25,
    salary: 9090,
  },
];

console.log(employeeData[0].name);

// console.log(t);//give error as it is not defined

//Operators
//Arithmetic Operator
var numOne = 20;
var numTwo = 30;
var add = numOne + numTwo; //addition
var sub = numTwo - numOne; //subtraction
var mult = numOne * numTwo; // multiplication
var divi = numTwo / numOne; //division (quotient)
var rem = numTwo % numOne; // modulus (remainder)

console.log(add, sub, mult, divi, rem);

//increment & decrement
add++; // add = add + 1
sub--; //sub = sub - 1

console.log(add, sub);
//console.log(Math.round(divi));

//Operator Precendance
/* 1st: (), 2nd *, 3rd /, 4th + & -, direction left to right */
//priority of operator
//10 + 89 (90 / 67) - 89;

//Assignment Operator (=)
var val = 20;

//String Operator (+)
var strOne = "hello";
var strTwo = "world";
console.log(strOne + " " + strTwo);

//Implicit coersion
console.log(strOne + 20);
console.log(20 + 20 + strOne); //40 + strOne
console.log(20 + strOne + 20);
console.log(strOne + 20 + 20); // the first addition is a string, subsequent values will also be strings
console.log("20" + 20); //2020
console.log("20" - 20); //0
console.log("vfdsdf" - 20); //NaN
console.log((strOne + strTwo) / 20); //NaN
console.log(("20" + "10") / 3); //"20"+"10"=2010(concat)/3
console.log("" + 20); //empty string is converted to zero

/*Rules
Operator precendence
Datatype of oprands
Non-numeric or numeric
result */

//numeric string "8090"
//alpha string "hf"
