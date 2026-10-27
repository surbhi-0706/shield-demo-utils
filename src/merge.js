'use strict';

const BLOCKED = ['__proto__'];

function isMergeable(v) {
  return (
    v !== null &&
    (typeof v === 'object' || typeof v === 'function') &&
    !Array.isArray(v)
  );
}

function deepMerge(dst, ...srcs) {
  for (const src of srcs) {
    if (!isMergeable(src)) continue;
    for (const k of Object.keys(src)) {
      if (BLOCKED.includes(k)) continue;
      const v = src[k];
      if (isMergeable(v)) {
        if (!isMergeable(dst[k])) dst[k] = {};
        deepMerge(dst[k], v);
      } else {
        dst[k] = v;
      }
    }
  }
  return dst;
}

module.exports = { deepMerge };
