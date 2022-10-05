#!/usr/bin/env node
let fs = require('fs');

let inputArr = process.argv.slice(2);
let optionArr = [];
let filesArr = [];

for (let i = 0; i < inputArr.length; i++) {
    let firstchar = inputArr[i].charAt(0);
    if (firstchar == '-') {
        optionArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);
    }
}
//option check

let isBothPresent = optionArr.includes("-b") && optionArr.includes("-n");
if (isBothPresent==true) {
    console.log("either enter -n or -b option");
   
}

//existence
for (let i = 0; i < filesArr.length; i++) {
    let isPresent = fs.existsSync(filesArr[i]);
    if (isPresent == false) {
        console.log(`file ${filesArr[i]} is not present`);
        
    }
}kk

let content = " ";
for (let i = 0; i < filesArr.length; i++) {
    let bufferContent = fs.readFileSync(filesArr[i]);
    content += bufferContent + "\r\n";
}

let contentArr = content.split("\r\n");
let isSPresent = optionArr.includes("-s");
if (isSPresent == true) {
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}
console.log("''''''''''''''''''''''");
//console.log(contentArr.join("\n"));
let isNPresent = optionArr.includes("-n");
if (isNPresent == true) {
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = `${i + 1} ${contentArr[i]}`;
    }
}

let isBPresent = optionArr.includes("-b");
if (isBPresent == true) {
    let counter = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = `${counter} ${contentArr[i]}`;
            counter++;
        }
    }
}
console.log(contentArr.join("\n"));