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

function hasPath(obj, pathStr) {
  const sentinel = Symbol('missing');
  return getPath(obj, pathStr, sentinel) !== sentinel;
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

function deletePath(obj, pathStr) {
  const keys = String(pathStr).split('.');
  let node = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!isObj(node[keys[i]])) return false;
    node = node[keys[i]];
  }
  return delete node[keys[keys.length - 1]];
}

module.exports = { getPath, hasPath, setPath, deletePath };
