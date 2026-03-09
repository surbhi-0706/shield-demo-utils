'use strict';

// Path segments that would reach the prototype chain (DS-2026-002).
const UNSAFE_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

function isObj(v) {
  return v !== null && typeof v === 'object';
}

function getPath(obj, pathStr, fallback) {
  let node = obj;
  for (const key of String(pathStr).split('.')) {
    if (!isObj(node) || !(key in node)) return fallback;
    node = node[key];
  }
  return node;
}

function setPath(obj, pathStr, value) {
  const keys = String(pathStr).split('.');
  for (const key of keys) {
    if (UNSAFE_KEYS.has(key)) {
      throw new Error(`Unsafe path segment: ${key}`);
    }
  }
  let node = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!isObj(node[key])) node[key] = {};
    node = node[key];
  }
  node[keys[keys.length - 1]] = value;
  return obj;
}

module.exports = { getPath, setPath };
