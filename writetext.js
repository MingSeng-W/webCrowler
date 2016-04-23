var fs=require('fs');
module.exports=function(text){
    fs.appendFile('./writetext/test.txt',text+'\r\n','utf8',function(err){
        if(err) {
            console.log(err);
        }
    });

};
