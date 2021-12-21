const text = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`;

console.log(text.match(/^.{6,20}$/gm));
console.log(text.match(/^(?=.*[A-Z]).{6,20}$/gm));
console.log(text.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@^%\/{}&*$#-._]).{6,20}$/gm));