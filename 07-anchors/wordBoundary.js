const text = 'dia diatonico diafragma media wikipedia bom_dia melodia radial';

console.log(text.match(/\bdia\w+/gi));
console.log(text.match(/\w+dia\b/gi));
console.log(text.match(/\w+dia\w+/gi));
console.log(text.match(/\bdia\b/gi));

// borda é não \w, que é [^A-Za-z0-9_]... temos problemas com os acentos!
const textTwo = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial';
console.log(textTwo.match(/\bdia\b/gi));
console.log(textTwo.match(/(\S*)?dia(\S*)?/gi));
console.log(textTwo.match(/([\wÀ-ü-]*)?dia([\wÀ-ü-]*)?/gi)); // Não resolve o problema do \b com acentos
console.log(textTwo.match(/(?<=[^\wÀ-ü-]|^)dia(?=[^\wÀ-ü-]|$)/gi)); // Resolve o problema do \b com acentos