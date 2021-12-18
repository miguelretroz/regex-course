const text = `1,2,3,4,5,6,a.b c!d?e	-
f_g`;

console.log(text.match(/\d/g)); // números [0-9]
console.log(text.match(/\D/g)); // não números [^0-9]

console.log(text.match(/\w/g)); // caracteres [a-zA-Z0-9_]
console.log(text.match(/[a-zA-Z0-9_]/g));
console.log(text.match(/\W/g)); // não caracteres [^a-zA-Z0-9_]
console.log(text.match(/[^a-zA-Z0-9_]/g));

console.log(text.match(/\s/g)); // espaços em branco [ \t\n\r\f]
console.log(text.match(/[ \t\n\r\r]/g));
console.log(text.match(/\S/g)); // não espaços em branco [^ \t\n\r\f]
console.log(text.match(/[^ \t\n\r\f]/g));


// \b \B