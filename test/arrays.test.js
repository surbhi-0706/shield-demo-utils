'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { chunk } = require('../src/arrays');

test('chunk splits a list', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('chunk rejects a bad size', () => {
  assert.throws(() => chunk([1], 0), RangeError);
});
