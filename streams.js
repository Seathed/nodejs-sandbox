const fs = require('fs');

// for(var i = 0; i < 250; ++i) {
//     for(var j = 0; j < 1000; ++j) {
//         fs.appendFileSync('./docs/numbers.txt', j.toString() + ' ', (err) => {});
//     }
//     fs.appendFileSync('./docs/numbers.txt', '\n', (err) => {});
// }

// can set the encoding to utf so that buffers are automatically displayed in readable text
const readStream = fs.createReadStream('./docs/numbers.txt', {encoding:'utf8'});
const writeStream = fs.createWriteStream('./docs/post3.txt');

// .on is an event listener (to a data event)
// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream);