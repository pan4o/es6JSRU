'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User(name) {
    _classCallCheck(this, User);

    this.name = name;
  }

  _createClass(User, [{
    key: 'sayHi',
    value: function sayHi() {
      console.log('Hello ' + this.name);
    }
  }]);

  return User;
}();

var tom = new User('Tom');

tom.sayHi(); //Hello Tom

//class expression

var Person = function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: 'sayHi',
    value: function sayHi() {
      console.log('Hi boy');
    }
  }]);

  return Person;
}();

new Person().sayHi(); //Hi boy

//gettere setters in Classes

var Boy = function () {
  function Boy(firstName, lastName) {
    _classCallCheck(this, Boy);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  _createClass(Boy, [{
    key: 'test'.toUpperCase(),
    value: function value() {
      console.log('TEST');
    }
  }, {
    key: 'fullName',
    get: function get() {
      return this.firstName + ' ' + this.lastName;
    },
    set: function set(newValue) {
      var _newValue$split = newValue.split(' ');

      var _newValue$split2 = _slicedToArray(_newValue$split, 2);

      this.firstName = _newValue$split2[0];
      this.lastName = _newValue$split2[1];
    }
  }], [{
    key: 'createGuest',
    value: function createGuest() {
      return new Boy('Default', 'User');
    }
  }]);

  return Boy;
}();

var hesp = new Boy('John', 'Hesp');

console.log(hesp.fullName);

hesp.fullName = 'Test Test';

console.log(hesp.fullName);

hesp.TEST();

//getters setters

var Employee = function () {
  function Employee(name, age) {
    _classCallCheck(this, Employee);

    this.name = name;
    this.age = age;
  }

  _createClass(Employee, [{
    key: 'info',
    get: function get() {
      return this.name + " " + this.age;
    },
    set: function set(newValue) {
      var _newValue$split3 = newValue.split(" ");

      var _newValue$split4 = _slicedToArray(_newValue$split3, 2);

      this.name = _newValue$split4[0];
      this.age = _newValue$split4[1];
    }
  }]);

  return Employee;
}();

var tim = new Employee('Tim', 22);

console.log(tim.info);

tim.info = "Tom 44";

console.log(tim.info);

var guest = Boy.createGuest();

console.log(guest.firstName, guest.lastName); //Default User

var Sidebar = function () {
  function Sidebar() {
    _classCallCheck(this, Sidebar);
  }

  _createClass(Sidebar, null, [{
    key: 'elemClass',
    get: function get() {
      return 'sidebar';
    }
  }]);

  return Sidebar;
}();

console.log(Sidebar.elemClass); //sidebar

//extends

var Man = function () {
  function Man(name) {
    _classCallCheck(this, Man);

    this.name = name;
  }

  _createClass(Man, [{
    key: 'sayName',
    value: function sayName() {
      console.log('my name is ' + this.name);
    }
  }]);

  return Man;
}();

var l = new Man('LeBron');

var Player = function (_Man) {
  _inherits(Player, _Man);

  function Player() {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).apply(this, arguments));
  }

  _createClass(Player, [{
    key: 'sayName',
    value: function sayName() {
      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'sayName', this).call(this);
      console.log('Hello ' + this.name);
    }
  }]);

  return Player;
}(Man);

var p = new Player('Durant');

var Volodya = function (_Man2) {
  _inherits(Volodya, _Man2);

  function Volodya() {
    _classCallCheck(this, Volodya);

    //nasledovanie roditelskogo konstruktora s argumentom dlya imeni
    return _possibleConstructorReturn(this, (Volodya.__proto__ || Object.getPrototypeOf(Volodya)).call(this, 'Volodya'));
  }

  return Volodya;
}(Man);

var v = new Volodya(); //{name:'Volodya'}