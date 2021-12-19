const text = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const textTwo = 'There is a big fog in NYC';

// + -> Um ou mais
const regex = /fogo+/gi;
console.log(text.match(regex));
console.log(textTwo.match(regex));

const textThree = 'Os números: 0123456789.';
console.log(textThree.match(/[0-9]/g));
console.log(textThree.match(/\d/g));
console.log(textThree.match(/[0-9]+/g));
console.log(textThree.match(/\d+/g));