'use strict';

const ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
};

function escapeHtml(input) {
  return String(input).replace(/[&<>]/g, (ch) => ESCAPES[ch]);
}

function stripTags(input) {
  return String(input).replace(/<[^>]*>/g, '');
}

module.exports = { escapeHtml, stripTags };
