'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sym = Symbol();

console.log(typeof sym === 'undefined' ? 'undefined' : _typeof(sym)); //symbol

// name of symbold

var sym2 = Symbol('Sim');

console.log(sym2.toString()); //Symbold(Sim)

//использоваение

var isAdmin = Symbol('isAdmin');

var user = _defineProperty({
  name: 'Tom'
}, isAdmin, true);

console.log(user[isAdmin]); //true


var user2 = _defineProperty({
  name: 'Tom'
}, Symbol.for('isAdmin'), 'yes admin');

console.log(Object.keys(user)); // ['name'] только name. isAdmin не доступен

console.log(user2[Symbol.for('isAdmin')]); //yes admin. а так доступен