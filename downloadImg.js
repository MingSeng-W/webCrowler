/**
 * Created by wanghongjie on 16/4/23.
 */
var fs=require('fs');
var request=require('request');
var path=require('path')
module.exports=function(uri,filename,callback){
request.head(uri,function(err,resopnse,body){
    if(err){
        console.log("err:"+err);
    }
    else{
      request(uri).pipe(fs.createWriteStream('images/'+filename+'.jpg')).on('close',callback);
    }
})
}
