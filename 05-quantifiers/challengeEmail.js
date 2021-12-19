const text = `
Os e-mails dos convidados são:
  - fulano@coder.com.br
  - xico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
`;

const regexEmail = /[\w.-]{3,20}@\w{3,20}\.[a-z]{2,4}.?\w*/g;

console.log(text.match(regexEmail));

// no futuro...
console.log(text.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g));
