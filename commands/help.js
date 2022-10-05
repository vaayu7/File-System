let fs = require('fs');
let path = require('path');
function helpFn() {
    console.log(
        `List of All the Commands:
                node main.js tree "directoryPath"
                node main.js Organize "directoryPath"
                node main.js help`
    );
}
module.exports={
    helpk:helpFn
}