'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { capitalize, slugify, truncate } = require('../src/strings');

test('capitalize', () => {
  assert.equal(capitalize('hello'), 'Hello');
});

test('slugify', () => {
  assert.equal(slugify('  Hello, World!  '), 'hello-world');
});

test('truncate', () => {
  assert.equal(truncate('abcdefghij', 6), 'abc...');
  assert.equal(truncate('abc', 6), 'abc');
});
