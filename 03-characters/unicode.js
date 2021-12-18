// no inicio...
// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuações, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes variável - Expansível
// Suporta mais de 1 Milhão caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos

// https://unicode-table.com/pt/

const text = 'aʬc௵d'
console.log(text.match(/\u02AC|\u0BF5/g));