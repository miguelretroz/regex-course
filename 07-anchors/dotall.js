const text = 'Romario era um excelente jogador\n, mas hoje é um político questionador';

console.log(text);

console.log(text.match(/^r.*r$/gi));
console.log(text.match(/^r[\s\S]*r$/gi));