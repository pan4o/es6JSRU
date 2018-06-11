"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generatorSequence),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(gen2),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(generateMore),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(generateMoreNum),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(justGen);

function generatorSequence() {
  return regeneratorRuntime.wrap(function generatorSequence$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          return _context.abrupt("return", 3);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var generator = generatorSequence();

var one = generator.next();

console.log(one); // {value: 1, done: false}

var two = generator.next();

console.log(two); // {value: 2, done: false}

var three = generator.next();

console.log(three); // {value: 3, done: true}

var gen = generatorSequence();

gen.next();
gen.next();
console.log(gen.next()); // {value: 3, done: true}

//generator iterators

function gen2() {
  return regeneratorRuntime.wrap(function gen2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return 1;

        case 2:
          _context2.next = 4;
          return 2;

        case 4:
          return _context2.abrupt("return", 3);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

var generator2 = gen2();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = generator2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var val = _step.value;

    console.log(val); // 1 2 return в таки случая игнорируется, выводятся только yield
  }
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

function generateMore(start, end) {
  var i;
  return regeneratorRuntime.wrap(function generateMore$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          i = start;

        case 1:
          if (!(i <= end)) {
            _context3.next = 7;
            break;
          }

          _context3.next = 4;
          return i;

        case 4:
          i++;
          _context3.next = 1;
          break;

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

var testGen = generateMore(1, 10);

console.log([].concat(_toConsumableArray(testGen))); // [1,2,3,4,5,6,7,8,9,10]


function generateMoreNum() {
  return regeneratorRuntime.wrap(function generateMoreNum$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield(generateMore(11, 14), "t0", 1);

        case 1:
          return _context4.delegateYield(generateMore(20, 25), "t1", 2);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this);
}
var wr = generateMoreNum();

console.log(wr.next()); // {value: 11, done: false}
console.log(wr.next()); // {value: 12, done: false}
console.log([].concat(_toConsumableArray(wr))); // [13, 14, 20, 21, 22, 23, 24, 25]


function justGen() {
  var ask1, ask2;
  return regeneratorRuntime.wrap(function justGen$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return "2+2?";

        case 2:
          ask1 = _context5.sent;
          _context5.next = 5;
          return "3*3?";

        case 5:
          ask2 = _context5.sent;


          alert(ask1);

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

var j = justGen();

alert(j.next().value);
alert(j.next(4).value);