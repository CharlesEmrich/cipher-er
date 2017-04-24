var sentence = prompt("Enter a sentence!");
console.log(sentence);
console.log(sentence.length);
console.log(typeof sentence.charAt(0).toUpperCase());
console.log(typeof sentence.charAt(sentence.length - 1).toUpperCase());
console.log(sentence.toUpperCase());

var capitalize = function (str) {
  var first = str.charAt(0).toUpperCase();
  // var middle = str.slice(1,(str.length - 1));
  var last = str.charAt(str.length - 1).toUpperCase();
  return first + last;
}

var reversalize = function (str) {
  var first = str.charAt(0);
  // var middle = str.slice(1,(str.length - 1));
  var last = str.charAt(str.length - 1);
  return last + first;
}

var doBothAndAdd = function (str) {
  var first = str.charAt(0).toUpperCase();
  var last = str.charAt(str.length - 1).toUpperCase();
  return str + last + first;
}

var middleLetter = function (str) {
  var middle = Math.floor((str.length / 2));
  var midLetter = str.charAt(middle);
  return midLetter + str;
}

console.log(middleLetter(sentence));
