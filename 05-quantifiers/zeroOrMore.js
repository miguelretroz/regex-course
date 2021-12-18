const text = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const textTwo = 'There is a big fog in NYC';

// * -> Zero ou mais
const regex = /fogo*/gi;
console.log(text.match(regex));
console.log(textTwo.match(regex));