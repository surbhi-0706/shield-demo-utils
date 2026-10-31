'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { clamp } = require('../src/numbers');

test('clamp keeps values in range', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-5, 0, 10), 0);
  assert.equal(clamp(50, 0, 10), 10);
});

test('clamp rejects an inverted range', () => {
  assert.throws(() => clamp(1, 10, 0), RangeError);
});
