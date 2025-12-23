const path = require('path');
module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'target'),
    },
    module:{
        rules:[
            {
                test:/\.(png)|(jpg)|(gif)|(jpeg)$/,
                use:[
                    {
                        loader:'./loaders/img-loader.js',
                        options:{
                            limit:3000,// 3000字节以上使用图片路径，3000字节以下使用base64编码
                            fileName:'img-[contenthash:5].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}