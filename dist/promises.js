'use strict';

var promise = new Promise(function (resolve, reject) {
  console.log('Loading...');

  setTimeout(function () {

    if (Math.random() > 0.5) {
      resolve('Hello User');
    }

    reject('Something Wrong:(');
  }, 1000);
});

promise.then(function (goodMessage) {
  return console.log(goodMessage);
}).catch(function (badMessage) {
  return console.log(badMessage + ' and this is a bad news');
}).then(function () {
  var result = 4;
  console.log('2+2=' + result); //2+2=4
  return result;
}).then(function (result) {
  return console.log(result + ' > 3');
}); // 4 > 3