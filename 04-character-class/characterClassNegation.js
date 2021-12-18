const text = '1,2,3,a.b c!d?e[f';

console.log(text.match(/\D/g));
console.log(text.match(/[^0-9]/g));
console.log(text.match(/[^\d!\?\[\s,\.]/g));

const textTwo = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';

console.log(textTwo.match(/[^!-/:-@\s]/g));