const text = `
Os e-mails dos convidados são:
  - fulano@cod3r.com
  - xico@empresa.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
  - fulano+de+tal@escola.ninja.br
`;

console.log(text.match(/\S+@[A-Za-z0-9]+\.[A-Za-z]{2,6}(.[A-Za-z]{2,})?\1/gm));