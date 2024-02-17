function download(url){
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading Completed!");
            const content = "ABCD";
            reject("Server problem");
        }, 6000);
    });
}

download("www.edu.com")
.then(function processDownload(value) {
    console.log("Download data is ", value);
})
.catch(function errInProcess(value) {
    console.log("Error occurred with ", value);
})
.finally(function nonBlockingProcess() {
    console.log("Everything went well!!");
})