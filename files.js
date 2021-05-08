const fs = require('fs');

// reading files
fs.readFile('./docs/post1.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

// writing files

// directories

// deleting files