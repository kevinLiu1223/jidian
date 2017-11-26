var path = require('path'); // 处理相关路径
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin'); // 导入自动生成HTMl文件的插件

module.exports = {
    // 通过entry属性，指定入口文件路径
    entry: path.join(__dirname, '/src/main.js'),
    output: { // 指定打包好文件的出口
        path: path.join(__dirname, 'public'), // 指定输出路径
        filename: 'bundle.js' // 指定输出的文件名
    },
    module: { // 作用：配置处理第三方文件类型的模块
        rules: [ // 第三方文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理CSS文件的匹配规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理sass文件的匹配规则
            { test: /\.(png|jpg|jpeg|gif|bmp)$/, use: 'url-loader?limit=10240' }, //  处理图片文件的匹配规则
            { test: /\.(woff|ttf|svg|woff2|eot)$/, use: 'url-loader' }, // 处理字体文件的匹配规则
            { test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/ },//处理ES6语法
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理sass文件的匹配规则 
            { test: require.resolve('axios'), use: [{loader:'expose-loader',options:'Axios'}] }, // 设置暴露全局变量            
            { test: require.resolve('./src/http'), use: [{loader:'expose-loader',options:'Http'}] }, // 设置暴露全局变量            
            { test: require.resolve('./src/routes/history.js'), use: [{loader:'expose-loader',options:'History'}] }, // 设置暴露全局变量            
        ]
    },
    devServer: { //  --open --port 3000 --hot 
        // open: true, // 自动打开浏览器
        // port: 8666, // 指定端口号
        // hot: true, // 指定启用热更新
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 使用webpack的热更新插件
        new webpack.NoEmitOnErrorsPlugin(),
        new htmlWebpackPlugin({ // 在内存中自动生成HTMl文件
            template: path.join(__dirname, '/public/index.html'), // 指定模板文件
            filename: 'index.html' // 指定内存中，生成文件的名称
        })
    ]
}