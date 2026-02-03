'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { deepMerge } = require('../src/merge');

test('merges nested objects', () => {
  const out = deepMerge({ a: { b: 1 } }, { a: { c: 2 }, d: 3 });
  assert.deepEqual(out, { a: { b: 1, c: 2 }, d: 3 });
});

test('later sources win', () => {
  assert.deepEqual(deepMerge({ a: 1 }, { a: 2 }, { a: 3 }), { a: 3 });
});

test('ignores non-object sources', () => {
  assert.deepEqual(deepMerge({ a: 1 }, null, undefined, 5), { a: 1 });
});

test('returns the same target object', () => {
  const target = {};
  assert.equal(deepMerge(target, { a: 1 }), target);
});

test('DS-2026-001: __proto__ payload does not pollute Object.prototype', () => {
  try {
    deepMerge({}, JSON.parse('{"__proto__": {"polluted": true}}'));
    assert.equal({}.polluted, undefined);
  } finally {
    delete Object.prototype.polluted;
  }
});

test('DS-2026-001: constructor.prototype payload does not pollute', () => {
  try {
    deepMerge({}, JSON.parse('{"constructor": {"prototype": {"polluted2": true}}}'));
    assert.equal({}.polluted2, undefined);
  } finally {
    delete Object.prototype.polluted2;
  }
});
