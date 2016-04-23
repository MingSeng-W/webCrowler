/**
 * Created by wanghongjie on 16/4/23.
 */
var cheerio=require('cheerio');
var path=require('path');
var downloadImg=require('./downloadImg');
module.exports=function(data,domStr){
    var $=cheerio.load(data);
    var img= $(domStr).toArray();
    for(var i=0;i<img.length;i++){
        var imgsrc=img[i].attribs.src;
        var filename=path.basename(imgsrc);
            downloadImg(imgsrc,filename,function(){

            })
    }
    console.log("images finish");
};
