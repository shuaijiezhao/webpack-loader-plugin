/**
 * webpack loader
 */
const { getOptions } = require('loader-utils');

module.exports = function (source) {
    // 借助 loader-utils 插件可以获取 options，使用 this.query.params 可以获取 params 对象
    console.log(getOptions(this), this.query.params)
    const handleContent = source.replace('框架', ' React 框架').replace('JS', 'Javacript');
    // 有些不仅仅需要返回处理的内容，还需要返回别的东西，比如 sourceMaps，这时可以使用 this.callback()
    // this.callback(null, handleContent, sourceMaps);
    this.callback(null, handleContent);
}