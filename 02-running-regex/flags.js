// Regex Flags
// g - global
// i - case insensitive

const text = 'Carlos assinou o abaixo-assinado.';
console.log(text.match(/C|ab/));
console.log(text.match(/c|ab/i));
console.log(text.match(/ab|c|a/gi));