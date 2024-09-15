const fs = require('fs');

// Ler o arquivo flag.txt e exibir o conteúdo no console
fs.readFile('flag.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
