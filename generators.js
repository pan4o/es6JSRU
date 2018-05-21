
function* generatorSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generatorSequence();

let one = generator.next();

console.log(one); // {value: 1, done: false}

let two = generator.next();

console.log(two); // {value: 2, done: false}

let three = generator.next();

console.log(three); // {value: 3, done: true}

let gen = generatorSequence();

gen.next();
gen.next();
console.log(gen.next()); // {value: 3, done: true}
