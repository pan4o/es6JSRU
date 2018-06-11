'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var name = 'serhii',
    surname = 'panchenko';


console.log(name, surname);

var _SerhiiPanchenkoAnd = 'Serhii Panchenko and other people'.split(" "),
    _SerhiiPanchenkoAnd2 = _toArray(_SerhiiPanchenkoAnd),
    firstName = _SerhiiPanchenkoAnd2[0],
    lastName = _SerhiiPanchenkoAnd2[1],
    other = _SerhiiPanchenkoAnd2.slice(2);

console.log(firstName, lastName); //Serhii Panchenko
console.log(other); //['and','other','people'];

var _ref = [],
    _ref$ = _ref[0],
    guest1 = _ref$ === undefined ? "Tom" : _ref$,
    _ref$2 = _ref[1],
    guest2 = _ref$2 === undefined ? "Bill" : _ref$2;


console.log(guest1, guest2); //Tom Bill

function getProfession() {
  return 'doctor';
}

var _ref2 = ['Jim'],
    visitorName = _ref2[0],
    _ref2$ = _ref2[1],
    visitorProfession = _ref2$ === undefined ? getProfession() : _ref2$;


console.log(visitorName, visitorProfession); // Jim doctor

var options = {
  title: 'Menu',
  width: 200,
  height: 50
};

var title = options.title,
    width = options.width,
    h = options.height,
    _options$size = options.size,
    s = _options$size === undefined ? 'L' : _options$size;


console.log(title, h, s);

var _dishes$size = {
  dishes: ['chicken', 'burgers'],
  size: {
    wid: 100,
    hei: 100
  }
},
    _dishes$size$dishes = _slicedToArray(_dishes$size.dishes, 3),
    chicken = _dishes$size$dishes[0],
    burgers = _dishes$size$dishes[1],
    _dishes$size$dishes$ = _dishes$size$dishes[2],
    nachos = _dishes$size$dishes$ === undefined ? 'nachos' : _dishes$size$dishes$,
    _dishes$size$size = _dishes$size.size,
    wi = _dishes$size$size.wid,
    hei = _dishes$size$size.hei;

console.log(chicken, burgers, wi, hei, nachos);

var _a = { a: 5 },
    a = _a.a;


console.log(a);

var b = [4, 5, 6, 7];
var c = [1, 2, 3].concat(b);

console.log(c); //1,2,3,4,5,6,7;