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