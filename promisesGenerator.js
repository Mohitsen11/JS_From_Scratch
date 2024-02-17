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

function doAfterReceive(value){
    let future = iter.next(value);
    if(future.done)
        return;
    future.value.then(doAfterReceive);
}

function* steps(){
    const downloadedData = yield download("www.edu.com");
    console.log("Downloaded data is ", downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log("File written is ", fileWritten);
    const uploadResponse = yield uploadData(fileWritten, "www.google.drive.com");
    console.log("Upload response is ", uploadResponse);
    return uploadResponse;
}

let iter = steps();

const future = iter.next();
console.log("joooh");
console.log("joooferh");

future.value.then(doAfterReceive);
