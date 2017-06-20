#基于NodeJS开发爬虫
>抓取网页：http://top.baidu.com/buzz?b=26&c=1

>网络爬虫是一种自动获取网页内容的程序。

>安装依赖包:npm install request cheerio debug async mongoose cron iconv-lite -S

>启动mongodb:

    cd /data
    mongod
    
>启动项目：

    启动server.js
    在浏览器打开项目：http://localhost:8080/
##项目功能
1. 发出HTTP请求获取指定URL中的内容
>request模块：让http请求变的简单

    let request=require('request');
    request('path',function(err,response,body){})`
2. 使用jQuery的语法操作网页元素，提取需要的元素
>cheerio模块：用于提取request返回的html中需要的信息
 将html告诉你的服务器
 
    let request=require('request');
    $=cheerio.load('<h2 class="title">Hello world</h2>');
    $('h2.title').text('hello text');
    $('h2').addClass('welcome');
    console.log($.html());
    console.log($.text());
3. 将数据保存到mysql数据库中
>moogoose模块：连接数据库四个步骤
       
       1. 引用
          let mongoose=require('mongoose');
       2. 连接数据库
          mongoose.connect("mongodb://localhost:端口号/数据库名称")
       3. 定义Schema
          Schema是数据库集合的模型骨架，定义了集合中的字段的名称和类型以及默认值等信息。
            let MessageSchema=new mongoose.Schema({
                 username:String,
                 content:String,
                 createAt:{type:Date,default:Date.now}
             });
       4. 定义模型
          Model是由通过Schema构造而成。
          拥有了Model，我们就拥有了操作数据库的能力。
             exports.Message=mongoose.model('Message',MessageSchema);


    let mongoose=require('mongoose');
    mongoose.connect('http://127.0.0.1/201702crawl');
    let MoviesSchema=new mongoose.Schema({
     name:String,
     url:String
    });
    exports.Movie=mongoose.model('Movie',MoviesSchema);
4. 建立web服务器显示这些数据
5. 使用计划任务自动执行更新任务
6. 布署项目到阿里云中并配置反向代理

# NodeCrawl
