function download(url, time){
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading Completed!");
            const content = "ABCD";
            resolve(content);
        }, time);
    });
}

let p1 = download("www.abc1.com", 5000);
let p2 = download("www.abc2.com", 1000);
let p3 = download("www.abc3.com", 3000);

Promise.all([p1,p2,p3]).then(function fulFillHandler(value) {
    console.log(value);
});