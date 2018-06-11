'use strict';

//map is collection for keys values

var map = new Map();

map.set('1', 'first');
map.set(2, 'second');
map.set(true, 'boolean');

console.log(map.get('1')); //first
console.log(map.get(2)); //second
console.log(map.get(true)); //boolean
console.log(map.size); //3

//chain set method

map.set(3, 3).set(4, 4).set(5, 5);

console.log(map.get(5)); //5

//set kets in init

var testMap = new Map([[1, 'test'], ['2', 'test2']]);

console.log(testMap.get(1)); //test
console.log(testMap.get('2')); //test2

//objects can be keys

var a = {
  name: 'Tom'
};

testMap.set(a, 'user');

console.log(testMap.get(a)); //user

//map.delete(key), map.clear(key), map.has(key)

var d = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);

d.delete(2);

console.log(d); //{1 => 1, 3 => 3, 4 => 4}

console.log(d.has(3)); //true

d.clear();

console.log(d); // {}

//iteration methods for Maps

var receipMap = new Map([['apples', '2'], ['oranges', '3'], ['milk', '1 liter']]);

//loop by keys

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = receipMap.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var key = _step.value;

    console.log(key); //apples orage milk
  }

  //loop for values
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = receipMap.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var value = _step2.value;

    console.log(value); // 2 3 1 liter
  }

  // loop for entries
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = receipMap[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var entry = _step3.value;
    // same receipMap.entries()
    console.log(entry); // apples 2 oranges 3 milk 1 liter
  }

  // map has default forEach methods
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

receipMap.forEach(function (key, value) {
  console.log(key + ' ' + value);
});

//2 apples
//3 oranges
//1 liter milk


//SET
//save value only once
var set = new Set();

var vasya = { name: 'Vasya' },
    kolya = { name: 'Kolya' },
    petya = { name: 'Petya' };

set.add(vasya);
set.add(vasya);
set.add(vasya);
set.add(vasya);
set.add(kolya);
set.add(petya);
set.add(petya);
set.add(petya);

console.log(set.size); //3

//iterator for set
set.forEach(function (item) {
  console.log(item.name); //Vasya Kolya Petya
});

/*
defalul methods of Set
add() delete() has() clear()
*/