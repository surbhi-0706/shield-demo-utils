'use strict';

// Keys that must never be walked into, or a crafted payload could modify
// Object.prototype (prototype pollution, see DS-2026-001).
const UNSAFE_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

/**
 * Returns true for plain objects and functions, and false for null,
 * primitives and arrays.
 * @param {*} value
 * @returns {boolean}
 */
function isMergeable(value) {
  return (
    value !== null &&
    (typeof value === 'object' || typeof value === 'function') &&
    !Array.isArray(value)
  );
}

/**
 * Recursively merges one or more source objects into the target.
 * The target is modified in place and also returned.
 * @param {object} target Object that receives the merged values.
 * @param {...object} sources Objects to merge, applied left to right.
 * @returns {object} The same target object.
 */
function deepMerge(target, ...sources) {
  for (const source of sources) {
    if (!isMergeable(source)) continue;
    for (const key of Object.keys(source)) {
      if (UNSAFE_KEYS.has(key)) continue;
      const value = source[key];
      if (isMergeable(value)) {
        if (!isMergeable(target[key])) target[key] = {};
        deepMerge(target[key], value);
      } else {
        target[key] = value;
      }
    }
  }
  return target;
}

module.exports = { deepMerge };
