let request=require('request');
let cheerio=require('cheerio');
let iconv=require('iconv-lite');
let url="http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1";
request({url,encoding:null},function (err,response,body) {
    body=iconv.decode(body,'gbk');
    $=cheerio.load(body);
    let movies=[];
    $('.list-title').each(function (index,item) {
        let $this=$(this);
        let movie={
            name:$this.text(),
            url:$this.attr('href')
        };
        movies.push(movie);
    });
});