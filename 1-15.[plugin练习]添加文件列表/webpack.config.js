const FileListPlugin = require('./plugins/FileListPlugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new FileListPlugin({filename: '文件列表.txt'})
    ]
} 