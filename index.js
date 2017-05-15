
var _ = require('lodash');
var loaderUtils = require('loader-utils');
var ac = require('action-comment')();

module.exports = function (source) {
  this.cacheable();
  var options = loaderUtils.getOptions(this);

  return ac.string(source).handles(options.handles).exec()
};
