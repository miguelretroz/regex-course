const text = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.';

// para definir um quantificador usa {}
console.log(text.match(/\d{1,2}/g));
console.log(text.match(/[0-9]{1,2}/g));

console.log(text.match(/[0-9]{2}/g));
console.log(text.match(/[0-9]{1,}/g));

console.log(text.match(/\w{7}/g));
console.log(text.match(/[\wÀ-ü]{7}/g));
console.log(text.match(/[\wõ]{7,}/g));

// no futuro...
console.log(text.match(/\b\d{1,2}\b/g));
console.log(text.match(/\b[\wõ]{7}\b/g));