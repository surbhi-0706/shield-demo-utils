'use strict';

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
