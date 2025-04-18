//   Q2) let str = 'I love my India'
//   output expected = 'India my love I'
//   Write code for this.

let str1='I love my India';
let words=str1.split(' ');
console.log(words);
let reversed=words.reverse();
console.log(reversed);
let result=reversed.join(' ');
console.log(result);
