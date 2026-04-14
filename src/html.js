'use strict';

// Quotes must be escaped too, otherwise values placed inside HTML attributes
// can break out of the attribute (cross-site scripting, DS-2026-003).
const ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(input) {
  return String(input).replace(/[&<>"']/g, (ch) => ESCAPES[ch]);
}

function stripTags(input) {
  return String(input).replace(/<[^>]*>/g, '');
}

module.exports = { escapeHtml, stripTags };
