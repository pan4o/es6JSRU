'use strict';

var apples = 4;
var oranges = 5;

console.log(apples + ' + ' + oranges + ' = ' + (apples + oranges));

//Check if string has other strings

var string = "hello tom";

console.log(string.includes('tom')); // true

//Check if string ends like other strings

console.log(string.endsWith('llo tom')); //true

//Check if string start like other strings

console.log(string.startsWith('hell')); // true

// Repeat string x'times
var str = "test this ";

console.log(str.repeat(3)); //test this test this test this