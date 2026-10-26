'use strict';

function isMergeable(value) {
  return (
    value !== null &&
    (typeof value === 'object' || typeof value === 'function') &&
    !Array.isArray(value)
  );
}

function deepMerge(target, ...sources) {
  for (const source of sources) {
    if (!isMergeable(source)) continue;
    for (const key in source) {
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
