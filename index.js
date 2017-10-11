'use strict';
function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i = 0; i < musicians.length; i++){
    newArr.push(musicians[i] + ' plays ' + instruments[i])
  }
  return newArr;
}

function johnLennonFacts(array){
  for (var i = 0; i < array.length; i++){
    array[i] += "!!!"
  }
  return array;
}

// function iLoveTheBeatles(num){
//   var times = [];
//   do {
//     times.push("I love the Beatles!");
//   } while (num < 15);
//   return times;
// }
