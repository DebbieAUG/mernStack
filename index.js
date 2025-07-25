import * as fs from 'fs';

console.log('Hello World');

const words = ['anna','bess','cassie'];
const output = words.join('\n');

fs.writeFile('words.txt', output, fileWritten);

function fileWritten() {
    console.log('File written successfully');
}