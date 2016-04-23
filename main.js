
var path=require('path');
var request=require('request');
var getImg=require('./getImg');
var getText=require('./getText');
var requrl="http://www.youku.com/";
request(requrl,function(error,resopnse,body){
    if(!error&&resopnse.statusCode==200){
         getText(body);
        getImg(body,'.v-thumb img');
    }
});
