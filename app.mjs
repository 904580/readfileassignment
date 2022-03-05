import fs from'fs';

fs.readFile("hello.txt",'utf8',(err,data)=>{
    if(err){
        return error
    }
    console.log(data);
});