/* Function */

/* Write a function sum that accepts two number arguments and returns the sumation of these numbers. */
const sum = function (a, b) {
    return a+b;
};

sum(5, 10); // => 15
sum(15, 10); // => 25


/* Write a function average that accepts two number arguments and returns the average of these numbers. */
const average = function (a, b) {
    return (a+b)/2;
};

average(20, 5); // => 12.5
average(10, 20); // => 15


/* Wite a function findFactorial Given an integer n, return n! (n factorial) */
const findFactorial = function(num){
    if(num == 0 || num == 1){
        return 1;
    }
    let fact= 1;
    for(let i = 1; i <= num; i++){
        fact*= i;
    }
    return fact;
}
    /*
    Examples:
    findFactorial(1) // => 1
    findFactorial(3) // => 6
    findFactorial(4) // => 24
    findFactorial(6) // => 720
    findFactorial(11) // => 39916800
    */


/* Write a function round that accepts one number argument, number and returns the number rounded to the nearest integer. */
const round = function (number) {
    return Math.round(number);
};
  
round(5); // => 5
round(2.4); // => 2
round(0.8); // => 1
round(1.7); // => 12
  

/* Write a function toThePowerOf that accepts two number arguments, base and exponent, and returns the base to the exponent power. */
const toThePowerOf = function (base, exponent) {
    return Math.pow(base, exponent)
};
  
toThePowerOf(2, 2); // => 4
toThePowerOf(2, 3); // => 8
toThePowerOf(9, 2); // => 81


/* Write a function randomNumber that returns a random value between zero and one (includes 0 but not 1). */
const randomNumber = function () {
    return Math.random();
};
  
randomNumber(); // => 0.5052417714491793
randomNumber(); // => 0.32678224417562673
randomNumber(); // => 0.43265697184952523


/* Write a function oneOrZero that uses randomNumber to return either the number zero or one. */
const oneOrZero = function () {
    return Math.floor(Math.random() * 2);
};
  
oneOrZero(); // => 1
oneOrZero(); // => 1
oneOrZero(); // => 0


/* Write a function randomRange that accepts a positive number and returns a random number between zero and the passed in argument. */
const randomRange = function (number) {
    return Math.floor(Math.random() * (number+1));
};
  
  // 10 and 0 are included
randomRange(10); // => 10
randomRange(10); // => 7
randomRange(10); // => 1
randomRange(10); // => 0


/* Write a function includeOf that accept two string arguments string, character and returns true if the string contain the character */
const includeOf = function (string, character) {
    return string.includes(character);
};
includeOf("Hello", "h"); // => false
includeOf("hello", "h"); // => true
includeOf("hello", "a"); // => false
includeOf("World", "r"); // => true
includeOf("World", "a"); // => false  



/* Array */

/* Write a function addToArray that accepts two arguments, array and string, and returns the same array after adding the string element to the end of it. */
const addToArray = function (array, string) {
    array.push(string);
    return array;
};
  
addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]


/* Write a function convertToString that accepts an argument array of strings , and returns a string made out of the array values. */
const convertToString = function (array) {
    return array.join();
};
  
convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"
  

/* Write a function updateValue that accepts three arguments, array, index, and value, return "there is no element to updated in this index" if there is no element in selceted index. or returns an updated array. */
// the array values are unique, no duplicate values in the array
const updateValue = function (array, value, index) {
    if(array.length >= index || array.length < index){
        array[index] = value;
        return array;
    } else 
    return "there is no element to updated in this index";
};
  
updateValue([10, 20, 30], 50, 3); // => "there is no element to updated in this index"
updateValue([1, 2, 3], 10, 0); // => [10, 2, 3]
updateValue([1, 2, 3], 10, 1); // => [1, 10, 3]
  
 
/* Write a function onlyString that accepts an arguments, array . the function must create a new array and return only string in this array */
const onlyString = function (array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if (typeof array[i] == "string"){
            newArray.push(array[i]);
        }
    }
    return newArray;
};
onlyString(["one",12,"hi",true , 88 , "12"]); // => ["one","hi","12"]
onlyString([10, 20, 30, 40, 50, 60,false]); // => []


/* Write a function login that accepts two string arguments, username and password, and returns a message saying "Login Successful" or "Login Failed" depending on whether the login information matches the data in the given array. */
const users = [
    ["Jane", "123456" ],
    ["admin", "abc123" ],
];
  
const login = function (username, password) {
    for(let i = 0; i < users.length; i++){
        if (users[i][0] === username && users[i][1] === password){
            return "Login Successful";
        } else return "Login Failed";
            
    }
};
  
login("Jane", "123456"); // => "Login Successful"
login("Jane", "5321"); // => "Login Failed"
login("Mark", "123456"); // => "Login Failed"
login("admin", "abc123"); // => "Login Successful"
login("admin", "aaabc123"); // => "Login Failed"


/* Write a function maximumNumber that accepts an array of numbers and returns the highest number in the array. */
const maximumNumber = function (numbers) {
    return Math.max(...numbers);
};
  
maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
maximumNumber([0, 5, 6]); // => 6


/* Write a function reversString that accepts a string and returns the string reversed. */
const reversString = function (string) {
    let reversed = "";
    for(let i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    return reversed;
};
// return str.split("").reverse().join("");

reversString("Hello"); // => "olleH"
reversString("John"); // => "nhoJ"


/* Write a function createUser that accepts two string arguments, username and password, and adds the new user to the allUsers array returning a message "Registration successful". Make sure to check if the username of the new user matches any of the usernames from existing users, if it does, return a message saying "That username is not available" instead. */
const allUsers = [
    { username: "Jane", password: "123456" },
    { username: "admin", password: "abc123" },
  ];
  
  const createUser = function (username, password) {
      for(let i = 0; i < allUsers.length; i++){
        if (username === allUsers[i][0]){
            return "That username is not available";
        }
      }
      allUsers.push({username: username});
      allUsers.push({password: password});
      return "Registration successful";
};
  
createUser("James", "123456"); // => "Registration successful"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}]
  
createUser("Jane", "5321"); // => "That username is not available"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}]
  
createUser("Mark", "22222"); // => "Registration successful"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}, {username: "Mark", password: "22222"}]
  
createUser("admin", "abc123"); // => "That username is not available"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}, {username: "Mark", password: "22222"}]


/* Write a function sliceArray that accepts two arguments, array and control. the function must create a new array and push subArrays see the example */
const sliceArray = function (array, control) {
    let tempArray = [];
    let newArray = [];
    while(array.length > 0){
        tempArray = array.splice(0, control);
        newArray.push(tempArray);
    }
    return newArray
  };
  sliceArray([10, 20, 30, 40, 50, 60], 2); // => [[10,20],[30,40],[50,60]]
  sliceArray([10, 20, 30, 40, 50,60], 3); // => [[10,20,30],[40,50,60]]
  sliceArray([10, 20, 30, 40, 50], 3); // => [[10,20,30],[40,50]]