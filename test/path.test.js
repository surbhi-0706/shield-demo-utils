'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { getPath, hasPath, setPath, deletePath } = require('../src/path');

test('getPath reads nested values', () => {
  assert.equal(getPath({ a: { b: 5 } }, 'a.b'), 5);
});

test('getPath returns fallback when missing', () => {
  assert.equal(getPath({ a: {} }, 'a.b.c', 'nope'), 'nope');
});

test('setPath creates intermediate objects', () => {
  assert.deepEqual(setPath({}, 'a.b.c', 1), { a: { b: { c: 1 } } });
});

test('hasPath reports presence', () => {
  assert.equal(hasPath({ a: { b: undefined } }, 'a.b'), true);
  assert.equal(hasPath({ a: {} }, 'a.b'), false);
});

test('deletePath removes nested keys', () => {
  const obj = { a: { b: 1, c: 2 } };
  assert.equal(deletePath(obj, 'a.b'), true);
  assert.deepEqual(obj, { a: { c: 2 } });
});
