"use strict";

function showMenu() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default title";
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;

  console.log(title, width, height);
}

showMenu('this is not default title'); // this is not default title 200 300

/*если есть желание поменять второй или третий параметр но при это оставить первый
дефолтным, можно передать undefined */

showMenu(undefined, 2000, 3000); // default title 2000 3000

/*Так же дефолтные параметры могут быть не только значиниями но функциями*/

function getDoctor() {
  return "doctor";
}

function sayHello() {
  var who = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDoctor();

  console.log("Hello " + who);
}

sayHello(); //Hello doctor
sayHello('boy'); //Hello boy

//spread operator instead arguments

function showString(firstName, lastName) {
  for (var _len = arguments.length, other = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    other[_key - 2] = arguments[_key];
  }

  console.log(firstName + " " + lastName + " " + other);
}

showString('Serhii', 'Panchenko', 'the greatest CEO of IT company');

//Прикольный хак

var arr = [1, 2, 3];

//Запись аналогична записи Math.max(1,2,3);
console.log(Math.max.apply(Math, arr)); //3

//Деструктуризация в параметрах

function showObjectParams(_ref) {
  var name = _ref.name,
      age = _ref.age;

  console.log(name + " " + age);
}

var person = {
  name: 'Tom',
  age: 33
};

showObjectParams(person); // Tom 33

function showObjectParams2(_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === undefined ? "test" : _ref2$title,
      _ref2$width = _ref2.width,
      w = _ref2$width === undefined ? 100222 : _ref2$width,
      h = _ref2.height;

  console.log(title + " " + w + " " + h);
}

var person2 = {
  height: 4000
};

showObjectParams2(person2);

var inc = function inc(x) {
  return x + 1;
};

console.log(inc(1)); //2

var getTime = function getTime() {
  return new Date().getHours() + ' ' + new Date().getMinutes();
};

console.log(getTime());

var group = {
  title: 'Our group',
  students: ['Tim', 'Anny', 'Bill'],
  getList: function getList() {
    var _this = this;

    this.students.forEach(function (student) {
      return console.log(_this.title + ': ' + student);
    });
  }
};

group.getList();