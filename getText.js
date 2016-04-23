/**
 * Created by wanghongjie on 16/4/23.
 */
var fs=require('fs');
var path=require('path');
var writeText=require('./writetext');
var cheerio=require('cheerio');
module.exports=function(data){
    var $=cheerio.load(data);
    var textAry=$('.v-link a').toArray();
    for(var i=0;i<textAry.length;i++){
       writeText(textAry[i].attribs.title);
    };
    console.log("text finish");

};