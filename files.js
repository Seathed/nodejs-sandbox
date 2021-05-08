const fs = require('fs');

// reading files
// fs.readFile('./docs/post1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('Reading files is asynchronous')

// writing files
// fs.writeFile('./docs/post2.txt', 'This is the second post in the log.',() => {
//     console.log('file was written')
// });

// directories
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('directory created');
    });
}

// deleting files