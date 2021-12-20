const text = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>';

console.log(text.match(/<(\w+)>.*<\/\1>/g));


const textTwo = 'Lentamente é mente muito lenta';
console.log(textTwo.match(/(lenta)(mente).*\2.*\1/gi));
console.log(textTwo.match(/(?:lenta)(mente).*\1/gi)); // não guarda o valor capturado pelo grupo

console.log(textTwo.match(/(lenta)(mente)/gi));
console.log(textTwo.match(/(lenta)(mente)?/gi));
console.log(textTwo.replace(/(lenta)(mente)/gi, '$1'));


const textThree = 'abcdefghijkll';
console.log(textThree.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));