'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const path = require('path');
const { safeJoin, fileExtension } = require('../src/files');

test('joins a normal relative path', () => {
  assert.equal(safeJoin('/srv/files', 'reports/q1.pdf'), path.resolve('/srv/files/reports/q1.pdf'));
});

test('fileExtension returns a lowercase extension', () => {
  assert.equal(fileExtension('Report.PDF'), 'pdf');
});

test('DS-2026-004: ../ traversal is rejected', () => {
  assert.throws(() => safeJoin('/srv/files', '../../etc/passwd'));
});

test('DS-2026-004: absolute paths outside the base are rejected', () => {
  assert.throws(() => safeJoin('/srv/files', '/etc/passwd'));
});

test('DS-2026-004: null bytes are rejected', () => {
  assert.throws(() => safeJoin('/srv/files', 'a\0b'));
});
