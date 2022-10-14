//EXERCISES
console.log("A" - 1); //NaN
console.log("A" + 1); //A1
console.log(2 + "2" + "2"); //222
console.log("hello" + "world" + 89); //helloworld89
console.log("hello" - "world" + 89); //NaN
console.log("hello" + 78); // hello78
console.log("78" - 90 + "2"); //-122 (78-90)+'2'='-12'+'2' (concat) = '122'
console.log(2 - "2" + 90); //90
console.log(89 - "90" / 2); //44
console.log(89 + "hello" + 90 / 9); //89hello10
console.log(2 + "2" + null); //22null
console.log(true > false); //true (1>0)
console.log((true + false) / 2); //0.5 (1+0)/2
console.log(true + false > 3); //false (1+0)>3 = 1>3 = false

// Extract first five letters from a string ('gfuh ieiuei')
var string2 = "gfuh ieiuei";
console.log(string2.slice(0, 6));

// Get the length of a string and make it uppercase ('hduej dij')
var string3 = "hduej dij";
console.log(string3.length);
console.log(string3.toUpperCase());

// Take a string, make it uppercase and trim it (' biji jdo ')
var string4 = " biji jdo ";
console.log(string4.toUpperCase().trim());

// Replace specified word in a string ('', '')
var string5 = "I have a book";
console.log(string5.replace("book", "pen"));

// Find the duplicate in a string() (use array)
var numbers = [19, 23, 32, 41, 41, 52, 60];
const toFindDuplicates = (numbers) =>
  numbers.filter((item, index) => numbers.indexOf(item) !== index);
const duplicateElements = toFindDuplicates(numbers);
console.log(duplicateElements);

// Reverse a string (use array method)
console.log(numbers.reverse());

// Find the highest and lowest value in array
var highNumber = Math.max(...numbers);
var lowNumber = Math.min(...numbers);
console.log(highNumber, lowNumber);
// Practice array of objects
var object = ["reactjs", "angular", "vue", "flutter", "jQuery"];
// Display first 3 elements in an array
console.log(object.slice(0, 3));
// Remove 4th (index) element and add 2 element there
object.splice(4, 1, "html", "css");
console.log(object);

/*  var str1 = 'Today is';
    var str2 = '      a beautiful day     '
    var str3 = ' In Hawaii.     '
Result = 'Today is a beautiful day In Hawaii.'
Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind. */
var str1 = "Today is";
var str2 = "      a beautiful day     ";
var str3 = " In Hawaii.     ";
console.log(str1 + " " + str2.trim() + str3.trimEnd());
