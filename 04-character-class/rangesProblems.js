const text = 'ABC [abc] a-c 1234';

console.log(text.match(/[a-c]/g));
console.log(text.match(/a-c/g)); // Fora de conjunto não é um intervalo

console.log(text.match(/[A-z]/g));

// A ordem da tabela UNICODE deve ser respeitada
// https://unicode-table.com/en
// console.log(text.match(/[a-Z]/g)); Range out of order in character class
// console.log(text.match(/[4-1]/g));