function download(url){
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading Completed!");
            const content = "ABCD";
            resolve(content);
        }, 6000);
    });
}

function writeFile(data){
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data);
        setTimeout(function write() {
            console.log("Completed writing the data in a file");
            const fileName = "file.txt";
            resolve(fileName);
        }, 5000);
    });
}

function uploadData(file , url){
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);

        setTimeout(function up() {
            console.log("Upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    });
}

async function steps(){
    const downloadedData = await download("www.edu.com");
    console.log("Downloaded data is ", downloadedData);
    const fileWritten = await writeFile(downloadedData);
    console.log("File written is ", fileWritten);
    const uploadResponse = await uploadData(fileWritten, "www.google.drive.com");
    console.log("Upload response is ", uploadResponse);
    return uploadResponse;
}

steps().then((value) => {
    console.log("Promise is resolved with the value ", value);
});

// we don't require to use .then based syntax async and await automatically handles that 

// note :- Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
// Await keyword can only be used inside the async function
async function fun1(){
    return 1;
}

async function fun2(){
    await 2;
}

console.log(fun1()); // output :- Promise { 1 }
console.log(fun2()); // output :- Promise { <pending> }
