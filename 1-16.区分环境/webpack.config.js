const baseConfig = require('./webpack.base.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');
module.exports = (env)=>{
    console.log(env);
    if(env.production){
        return {...baseConfig,...prodConfig}
    }else{
        return {...baseConfig,...devConfig}
    }
}