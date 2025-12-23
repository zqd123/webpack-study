const loaderUtils = require('loader-utils');
function loader(buffer){
    const {limit=1000,fileName='[contenthash:5].[ext]'} = this.getOptions()
    const bufferSize = buffer.byteLength
    let content = ''
    if(bufferSize<=limit){
         content = toBase64(buffer)
    }else{
         content = getFilePath.call(this,buffer,fileName)
    }
    return `module.exports = \`${content}\``
}
loader.raw = true //该loader要处理的是原始数据
module.exports = loader
/**方式一：base64编码 */
function toBase64(buffer){
    return 'data:image/png;base64,'+buffer.toString('base64')
}
/**方式二：获取文件路径 */
function getFilePath(buffer,fileName){
    const _fileName = loaderUtils.interpolateName(this,fileName,{
        content:buffer
    })
    console.log(_fileName);
    this.emitFile(_fileName,buffer)
    return _fileName
}