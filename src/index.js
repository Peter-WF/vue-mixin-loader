/**
 * @authors       王斐
 * @email         wangfeia@zbj.com
 * @description   源码
 */

const loaderUtils = require('loader-utils');

const lessMixinLoader = require('less-mixin-loader');

const path = require('path');

module.exports = function (source) {
  if (path.extname(this.resourcePath) === '.less') {
    return lessMixinLoader.apply(this, arguments);
  } else {
    this.cacheable();

    const config = loaderUtils.getOptions(this);
    const compass = "@import '" + path.relative(path.dirname(this.resourcePath), config.mixinPath) + "';";

    return source.replace(/(<style.+lang=['"]less['"]\s?.*>)/g, `$1\n${compass}`);
  }
};
