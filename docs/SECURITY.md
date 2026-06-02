# Security Policy

## Reporting a vulnerability

Please report vulnerabilities privately to the maintainers. Do not open a
public issue. We aim to respond within 72 hours.

## Fixed vulnerabilities

| ID | Summary | Files | Fixed in |
|---|---|---|---|
| DS-2026-001 | Prototype pollution in `deepMerge` through `__proto__` and `constructor.prototype` keys | `src/merge.js` | 1018c1c |
| DS-2026-002 | Prototype pollution in `setPath` through unsafe path segments | `src/path.js` | 6d1188b |
| DS-2026-003 | Cross-site scripting: `escapeHtml` did not escape quotes | `src/html.js` | 4a8c7be |
| DS-2026-004 | Path traversal in `safeJoin` | `src/files.js` | d52f700 |

## For contributors

Changes that touch the files above get extra review. A pull request must never
remove or weaken the checks listed here, and the matching tests in `test/`
must keep passing.
