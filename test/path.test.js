'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { getPath, setPath } = require('../src/path');

test('getPath reads nested values', () => {
  assert.equal(getPath({ a: { b: 5 } }, 'a.b'), 5);
});

test('getPath returns fallback when missing', () => {
  assert.equal(getPath({ a: {} }, 'a.b.c', 'nope'), 'nope');
});

test('setPath creates intermediate objects', () => {
  assert.deepEqual(setPath({}, 'a.b.c', 1), { a: { b: { c: 1 } } });
});
