#!/usr/bin/env node



let helpf=require('./commands/help.js');
let organizeF=require('./commands/organize.js');
let treef=require('./commands/tree.js');

let inputArr = process.argv.slice(2);

let command = inputArr[0];
let types= {
    media: ["mp4", "mkv"],
    archives: ["zip", '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docs', 'doc', 'pdf', 'xlxs', 'xls', 'odt', 'ods', 'odp', 'odj', 'odf', 'txt', 'tx'],
    app:['exe', 'dmg', 'pkg', 'deb']
}
switch (command) {
    case "tree":
        treef.treek(inputArr[1]);
        break;
    case "organize":
        organizef.organizek(inputArr[1]);
        break;
    case "help":
        helpf.helpk();
        break;
    default:
        console.log('Please 🙏 Input right Command');
        break;
}






//console.log("i  am in");