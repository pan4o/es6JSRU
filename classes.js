

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log('Hello ' + this.name);
  }
}

let tom = new User('Tom');

tom.sayHi(); //Hello Tom

//class expression

let Person = class {
  sayHi() {
    console.log('Hi boy');
  }
}

new Person().sayHi(); //Hi boy

//gettere setters in Classes

class Boy {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newValue) {
    [this.firstName, this.lastName] = newValue.split(' ');
  }

  ['test'.toUpperCase()]() {
    console.log('TEST');
  }

  static createGuest() {
    return new Boy('Default','User');
  }
}

let hesp = new Boy('John', 'Hesp');

console.log(hesp.fullName);

hesp.fullName = 'Test Test'

console.log(hesp.fullName);

hesp.TEST();

//getters setters

class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return this.name + " " + this.age;
  }

  set info(newValue) {
    [this.name, this.age] = newValue.split(" ");
  }
}

let tim = new Employee('Tim', 22);

console.log(tim.info);

tim.info = "Tom 44";

console.log(tim.info);

let guest = Boy.createGuest();

console.log(guest.firstName, guest.lastName); //Default User

class Sidebar {
  static get elemClass() {
    return 'sidebar';
  }
}

console.log(Sidebar.elemClass);  //sidebar

//extends

class Man {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log('my name is ' + this.name);
  }
}

let l = new Man('LeBron');

class Player extends Man {
  sayName() {
    super.sayName();
    console.log('Hello ' + this.name);
  }
}

let p = new Player('Durant');

class Volodya extends Man {
  constructor() {
    //nasledovanie roditelskogo konstruktora s argumentom dlya imeni
    super('Volodya');
  }
}

let v = new Volodya(); //{name:'Volodya'}
