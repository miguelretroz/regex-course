const text = `
ca	r
r	o s!
`;

console.log(text.match(/ca\tr\nr\to s!\n/)); // \s shorthand para \t ou \n ou \f
// É possível utilizar space literal no lugar de \s