'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { escapeHtml, stripTags } = require('../src/html');

test('escapes angle brackets and ampersands', () => {
  assert.equal(escapeHtml('<b>Tom & Jerry</b>'), '&lt;b&gt;Tom &amp; Jerry&lt;/b&gt;');
});

test('stripTags removes tags', () => {
  assert.equal(stripTags('<p>Hello <b>you</b></p>'), 'Hello you');
});
