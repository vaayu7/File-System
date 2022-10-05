let fs = require('fs');
let path = require('path');

function organizeFn(dirPath) {
    //1.input -> directory path given
    let destpath;
    if (dirPath == undefined) {
        destpath=process.cwd();
        return;
    } else {
        let doesExist = fs.existsSync(dirPath)
        if (doesExist) {
            //2. create-> organize_file ->directory
            destpath = path.join(dirPath, "organized_file");
            if(fs.existsSync(destpath)==false){
                fs.mkdirSync(destpath);
            }
            
        } else {
            console.log("kindly enter the correct path");
        }
    }
organizeHelper(dirPath, destpath);
    //3. identify category of all the files present in that input diresctory->
    //4. copy/cut files to that organize directory inside  of any of category folder

  //  console.log("Organize the file", dirPath);
}

function organizeHelper(src, dest){
   let childNames= fs.readdirSync(src);
   //console.log(childNames);
   for(let i=0;i<childNames.length;i++){
       let childAddress=path.join(src, childNames[i]);
       let isFile = fs.lstatSync(childAddress).isFile();
       if(isFile){
         //  console.log(childNames[i]);
           let category= getCategory(childNames[i]);
           console.log(childNames[i], "belongs to --> ", category);

           sendFiles(childAddress, dest, category);
       }
   }
}

function sendFiles(srcFilePath, dest, category){
    let categoryPath=path.join(dest, category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fileName=path.basename(srcFilePath);
    let destFilePath=path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}

function getCategory(name){
    let ext=path.extname(name);
    console.log(ext);
    ext=ext.slice(1);
    for(let type in types){
        let ctypeArray=types[type];
        for(let i=0;i<ctypeArray.length;i++){
            if(ext==ctypeArray[i]){
                return type;
            }
        }
    }
    return "others";
}

module.exports={
    organizek:organizeFn
}