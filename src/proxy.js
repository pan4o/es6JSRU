

let user = {};

let proxy = new Proxy(user, {
  get(target, prop) {
    console.log(`chtenie ${prop}`);
    return targe[prop];
  },
  set(target, prop, value) {
    console.log(`zapis ${prop} ${value}`);
    target[prop] = value;
    return true;
  }
});

let dictionary = {
  'Hello': 'Привет',
  'Buy': 'Пока',
};

let proxy2 = new Proxy(dictionary, {
  get(target, phrase) {
    if(phrase in target) {
      return target[phrase];
    } else {
      console.log(`${phrase} without translate`);
    }
  },
  set(targe, phrase, value) {
    console.log(`congrats, you added a new word ${phrase}`)
    targe[phrase] = value;
  },
  deleteProperty(target, phrase) {
    console.log(`${phrase} was deleted`);
  }
});

let person = {
  name: 'Piter',
  surname: 'Pen',
  _status: 'superhero',
  _age: 'no information'
}

let piterProxy = new Proxy(person, {
  enumerate(target) {
    let props = Object.keys(target).filter(function(prop) {
      return prop[0] != '_';
    });

    return props[Symbol.iterator]();
  }
});

for(let key in piterProxy) {
  console.log(key); //stupid bug
}

// proxy apply

function sum(a, b) {
  return a + b;
}

let proxySum = new Proxy(sum, {
  apply: function(target, _this, argumentsList) {
    console.log(`Вычесляем сумму ${argumentsList}`);
    return target.apply(_this, argumentsList);
  }
});


// proxy construct

function User(name, surname) {
  this.name = name;
  this.surname = surname;
}

let userProxy = new Proxy(User, {
  construct: function(target, userArguments) {
    console.log(`creating User with arguments - ${userArguments}`);
    return new target(...userArguments);
  }
});
