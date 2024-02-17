function download(url){
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading Completed!");
            const content = "ABCD";
            reject(content);
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

download("www.edu.com")
.then(function processDownload(value) {
    console.log("Downloaded the data with value ", value);
    return writeFile(value);
},
    function rejectDownload(value) {
        console.log("Data download process is rejected ", value);
        throw value;
    }
)
.then(function processWrite(value) {
    console.log("Data is written in the file is ", value);
    return uploadData(value, "www.google.drive.com");
},
function rejectWrite(value) {
    console.log("Writing process is rejected ", value);
    throw value;
}
)
.then(function processUpload(value) {
    console.log("File is uploaded on the url ", value);
},
function rejectUpload(value) {
    console.log("Upload process is rejected ", value);
}
);