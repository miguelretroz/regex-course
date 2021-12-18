const text = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3';
console.log(text.match(/\.mp3/g));

// no futuro...
console.log(text.match(/\w+\.mp3/g));