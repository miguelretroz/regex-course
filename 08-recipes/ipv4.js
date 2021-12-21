const text = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`;

const n = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])';

const regexIpv4 = new RegExp(`^${n}\\.${n}\\.${n}\\.${n}$`, 'gm');

console.log(text.match(regexIpv4));