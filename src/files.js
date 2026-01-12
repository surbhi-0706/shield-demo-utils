'use strict';

const path = require('path');

function safeJoin(baseDir, userPath) {
  return path.join(baseDir, String(userPath));
}

function fileExtension(filename) {
  return path.extname(String(filename)).slice(1).toLowerCase();
}

module.exports = { safeJoin, fileExtension };
