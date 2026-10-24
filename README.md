# shield-demo-utils

A small collection of utilities for merging objects, reading and writing nested
values, escaping HTML, joining file paths and working with strings.

> **Demo project.** This repository is a test target for the Diff Shield tool.
> Its history contains fictional security fixes, and some branches contain
> pull requests that intentionally undo them. It is marked `private` in
> `package.json` and must never be published to npm.

## Install

```bash
git clone <this-repo>
cd shield-demo-utils
npm test
```

## Usage

```js
const { deepMerge, setPath, escapeHtml, safeJoin, slugify } = require('./src');

deepMerge({ a: { b: 1 } }, { a: { c: 2 } });   // { a: { b: 1, c: 2 } }
setPath({}, 'user.name', 'Ada');                 // { user: { name: 'Ada' } }
escapeHtml('<b>hi</b>');                         // '&lt;b&gt;hi&lt;/b&gt;'
safeJoin('/srv/files', 'reports/q1.pdf');        // '/srv/files/reports/q1.pdf'
slugify('Hello, World!');                        // 'hello-world'
```

## Notes

`deepMerge` returns the same object you pass as the first argument, so you
receive a reference and not a separate copy. If an error occurred while merging,
the target may be partly updated.

## Security

Security fixes are tracked in [`docs/SECURITY.md`](docs/SECURITY.md) and in
[`advisories.json`](advisories.json). Please report vulnerabilities privately
to the maintainers instead of opening a public issue.
