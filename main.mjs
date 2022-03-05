import fs from 'fs';

fs.appendFile('./hello.txt',  'this is the extend content',(err,data)=>{
    if(err){
        return error
    }
    console.log("file is updated");
});