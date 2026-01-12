'use strict';

function capitalize(input) {
  const s = String(input);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function slugify(input) {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function truncate(input, maxLength, suffix = '...') {
  const s = String(input);
  if (s.length <= maxLength) return s;
  return s.slice(0, Math.max(0, maxLength - suffix.length)) + suffix;
}

module.exports = { capitalize, slugify, truncate };
