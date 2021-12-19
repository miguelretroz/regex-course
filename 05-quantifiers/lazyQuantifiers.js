const text = '<div>Conteudo 01</div><div>Conteudo 02</div>';


// Quantificadores SÃO gulosos (greedy)...
console.log(text.match(/<div>.+<\/div>/g));
console.log(text.match(/<div>.*<\/div>/g));
console.log(text.match(/<div>.{0,100}<\/div>/g));


/// Quantificadores NÃO gulosos (lazy)...
console.log(text.match(/<div>.+?<\/div>/g));
console.log(text.match(/<div>.*?<\/div>/g));
console.log(text.match(/<div>.{0,100}?<\/div>/g));
