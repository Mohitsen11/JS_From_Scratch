function download(url){
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading Completed!");
            const content = "ABCD";
            reject("Server is not responding");
        }, 6000);
    });
}



async function steps(){
    try {
        const downloadedData = await download("www.edu.com");
    console.log("Downloaded data is ", downloadedData);
    return downloadedData;
    } catch (error) {
        console.log("Caught the error",error);
    } finally{
        console.log("End!");
    }
}

steps();