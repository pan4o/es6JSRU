
function showMenu(title="default title", width=200, height=300) {
  console.log(title, width, height);
}

showMenu('this is not default title');// this is not default title 200 300

/*если есть желание поменять второй или третий параметр но при это оставить первый
дефолтным, можно передать undefined */

showMenu(undefined, 2000, 3000); // default title 2000 3000

/*Так же дефолтные параметры могут быть не только значиниями но функциями*/

function getDoctor() {
  return "doctor";
}

function sayHello(who=getDoctor()) {
  console.log(`Hello ${who}`);
}

sayHello(); //Hello doctor
sayHello('boy'); //Hello boy

//spread operator instead arguments

function showString(firstName, lastName, ...other) {
  console.log(`${firstName} ${lastName} ${other}`);
}

showString('Serhii','Panchenko','the greatest CEO of IT company');

//Прикольный хак

let arr = [1,2,3];

//Запись аналогична записи Math.max(1,2,3);
console.log(Math.max(...arr)); //3

//Деструктуризация в параметрах

function showObjectParams({name, age}) {
  console.log(`${name} ${age}`);
}

let person = {
  name: 'Tom',
  age: 33
}

showObjectParams(person); // Tom 33

function showObjectParams2({title="test", width:w=100222, height:h}) {
  console.log(`${title} ${w} ${h}`);
}

let person2 = {
  height: 4000
}

showObjectParams2(person2);


let inc = x => x + 1;

console.log(inc(1)); //2

let getTime = () => new Date().getHours() + ' ' + new Date().getMinutes();

console.log(getTime());
