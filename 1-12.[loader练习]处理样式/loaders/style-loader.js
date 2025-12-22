module.exports = function (sourceCode) {
    //把css代码转换成js代码
    const code = `const style = document.createElement('style');
    style.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(style);
    module.exports = \`${sourceCode};\``;
    return code;
}