const { read, write } = require('./files');

const applyColor = (text, reg, color) => text.replace(reg, `<span style="color: #${color}"><b>$1</b></span>`);

const fileName = 'sourceCode.html';
const fileContent = read(fileName);

const regexCode = /<code>[\s\S]*<\/code>/i;
let code = fileContent.match(regexCode)[0];

// String...
code = applyColor(code, /(\".*\")/g, 'ce9178');

// Palavras reservadas
code = applyColor(code, /\b(package|public|class|static|if|else)\b/g, 'd857cf');

// Tipos...
code = applyColor(code, /\b(int|void)\b/g, '1385e2');

// Comentários de mutiplas linhas...
code = applyColor(code, /(\/\*[\s\S]*\*\/)/g, '267703');

// Comentário de uma linha...
code = applyColor(code, /(^\/\/[\s\S]*\n)/g, '267703');

const finalContent = fileContent.replace(regexCode, code);

write(fileName, finalContent);