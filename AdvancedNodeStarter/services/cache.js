const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function() {
  console.log('IM ABOUT TO RUN A QUERY');

  return exec.apply(this, arguments);
};
