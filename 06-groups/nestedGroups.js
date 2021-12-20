const text = 'supermercado hipermercado minimercado mercado';

console.log(text.match(/(super|hiper|mini)?mercado/g));
console.log(text.match(/((su|hi)per|mini)?mercado/g));