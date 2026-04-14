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

test('DS-2026-003: quotes are escaped so attributes cannot be broken out of', () => {
  const out = escapeHtml('" onmouseover="alert(1)');
  assert.equal(out.includes('"'), false);
  assert.equal(escapeHtml("it's"), 'it&#39;s');
});
