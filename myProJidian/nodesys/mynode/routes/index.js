var express = require('express');
var router = express.Router();

/* GET home page. */

// app.METHOD(PATH,HANDLER)
// app express实例
// METHOD HTTP请求方法
// PATH 服务器上的路径
// HANDLER 路由匹配时执行的函数


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
