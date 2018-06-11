'use strict';

var _obj, _obj2;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Korotkoe svoystvo

var name = "Victor";
var isAdmin = true;

var obj = {
  name: name,
  isAdmin: isAdmin
};

console.log(JSON.stringify(obj)); //{"name":"Victor","isAdmin":true}


//Vichislyaemie svoystva

var prop = 'surname';

var person = _defineProperty({}, prop, 'Petrov');

console.log(person.surname); //Petrov

var a = 'my ';
var b = 'green ';
var c = 'crocodile';

var animal = _defineProperty({}, a + b + c, 'Gena');

console.log(animal['my green crocodile']); //Gena

//Object.assign

var user = { name: 'Irvin', age: 18 };
var info = { age: 20, gender: 'male' };
var position = { job: 'admin' };

var assignUser = Object.assign(user, info, position);

console.log(assignUser); // {name: "Irvin", age: 20, gender: "male", job: "admin"}

//user has been changed too
console.log(user); // {name: "Irvin", age: 20, gender: "male", job: "admin"}

//he also can clone Objects

var userClone = {};

Object.assign(userClone, user);

console.log(userClone); // {name: "Irvin", age: 20, gender: "male", job: "admin"}\

//Object.is(value1, value2)

var n = 34;
var t = 34;

console.log(Object.is(n, t)); // true

//methods of objects

var testObj = {
  name: 'Ingvar',
  getName: function getName() {
    return this.name;
  }
};

console.log(testObj.getName()); //Ingvar

//Getter

var ceoName = "bill";
var ceoSurname = "gates";

var microsoftFounder = {
  ceoName: ceoName,
  ceoSurname: ceoSurname,
  get fullName() {
    return ceoName + ' ' + ceoSurname;
  }
};

console.log(microsoftFounder.fullName); //bill gates

//method with name in variable

var getName = "getVasyaName";

var vasya = _defineProperty({
  name: 'vasya'
}, getName, function () {
  return this.name;
});

console.log(vasya.getVasyaName()); //vasya

//Super

var walkingDead = {
  walk: function walk() {
    console.log("I'm walking");
  }
};

var karl = _obj = {
  __proto__: walkingDead,
  walk: function walk() {
    _get(_obj.__proto__ || Object.getPrototypeOf(_obj), 'walk', this).call(this);
  }
};

karl.walk(); //I'm walking

var walk = karl.walk;

walk(); //I'm walking

//setPrototypeOf(object, newProto);

var foo = {
  name: 'foo',
  age: 34
};

var bar = _obj2 = {
  name: 'bar',
  getAge: function getAge() {
    return _get(_obj2.__proto__ || Object.getPrototypeOf(_obj2), 'age', this);
  }
};

Object.setPrototypeOf(bar, foo);

console.log(bar.__proto__); //{name: "foo", age: 34}
console.log(bar.getAge()); //34