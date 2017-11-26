var express = require('express')
var app = express()

app.get('/',function (req,res) {//请求 响应
    res.send(
        `<div style="color: blue">
            hello express
         </div>`
    )
})

app.listen(3010,function () {
    console.log('this is listen')
})