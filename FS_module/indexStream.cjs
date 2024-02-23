const fs = require('fs');
const TransformStream = require('stream').Transform;

const filePath = __dirname + '/run.txt';
const newFilePath = __dirname + '/new.txt';

const readStream = fs.createReadStream(filePath);
const writeFileStream = fs.createWriteStream(newFilePath);

const writeStream = process.stdout;

// i can transform the data before piping the chunk to the write stream

const transformedStream = new TransformStream({
    transform(chunk, enc, cb){
        this.push(chunk.toString().toUpperCase());

        setTimeout(cb, 3000);
    }
})

const outputStream = readStream.pipe(transformedStream);

outputStream.pipe(writeStream)
outputStream.pipe(writeFileStream);