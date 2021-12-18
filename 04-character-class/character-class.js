const text = '1,2,3,4,5,6,a.b c!d?e[f';


// para definir um classe (ou conjunto) de caractres usa []
const regexPairs = /[02468]/g;
console.log(text.match(regexPairs));

const textTwo = 'João não vai passear na moto';
const regexWithAccent = /n[aã]/g;
console.log(textTwo.match(regexWithAccent));