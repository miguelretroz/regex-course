const text = '.$+*?- a b c d 1 2 3 4';

console.log(text.match(/[+.?*$]/g));
// Dentro de conjunto meta caracteres
// são entendidos como caracteres literais
// não são todos mas boa parte
// assim não precisando utilizar o scape (\)

console.log(text.match(/[$-~]/g)); // isso é um intervalo (range)
// Os ranges são devidios pela tabela UNICODE
// a ordem da tabela deve ser seguida
// https://unicode-table.com/en

// NÃO é um intervalo (range)...
console.log(text.match(/[$\-?]/g));
console.log(text.match(/[-?]/g));

// Dependento do contexto esse caracteres dentro de conjuto podem precisar do scape : - [ ] ^