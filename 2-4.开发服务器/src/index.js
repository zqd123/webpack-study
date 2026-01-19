console.log('index');
/** 下面的请求会发生跨域，需要配置devServer中的proxy */
fetch('/api/getUser').then(res => {
  console.log(res);
})