// . ? * + - ^ $ | [ ] { } ( ) \ :
const text = '1,2,3,4,5,6,a.b c!d?e';
const regexDot = /\./g;
console.log(text.split(regexDot));

const regexSymbols = /,|\.|\?|!| /g;
console.log(text.split(regexSymbols));