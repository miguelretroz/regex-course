const text = 'João é calmo, mas no transito fica nervoso.';

console.log(text.match(/[\wÀ-ü]+/gi));

// Positive lookhead
console.log(text.match(/[\wÀ-ü]+(?=,)/gi));
console.log(text.match(/[\wÀ-ü]+(?=\.)/gi));
console.log(text.match(/[\wÀ-ü]+(?=, mas)/gi));

// Negative lookhead
console.log(text.match(/[\wÀ-ü]+\b(?!,)/gi));
console.log(text.match(/[\wÀ-ü]+[\s|\.](?!,)/gi));