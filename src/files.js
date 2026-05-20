'use strict';

const path = require('path');

// Resolves userPath inside baseDir and refuses anything that escapes it
// (path traversal, DS-2026-004).
function safeJoin(baseDir, userPath) {
  const input = String(userPath);
  if (input.includes('\0')) {
    throw new Error('Invalid path');
  }
  const base = path.resolve(baseDir);
  const full = path.resolve(base, input);
  if (full !== base && !full.startsWith(base + path.sep)) {
    throw new Error('Path traversal detected');
  }
  return full;
}

function fileExtension(filename) {
  return path.extname(String(filename)).slice(1).toLowerCase();
}

module.exports = { safeJoin, fileExtension };
