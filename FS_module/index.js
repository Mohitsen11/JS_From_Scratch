import { readFile, writeFile } from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url);

let contents = await readFile(filePath, {encoding: 'utf-8'});
console.log(contents);

// now we can play with the files grammar or we can create a template

const obj = {
    name: "Mohit",
    company: "Google",
    age: 21
}

for( const [key, value] of Object.entries(obj)){
    contents = contents.replace(`{${key}}`, value);
}

await writeFile(filePath, contents);
await writeFile(new URL('./newIndex.html', import.meta.url), contents);

console.log(contents);
