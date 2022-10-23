# Getting Started

## Update for Personal Use

1. Update the root `package.json` with your repository name, url, and version.

2. Modify `packages/` to suit your needs.

3. Generate a `publish` access token from `NPM` and save as a secret titled `NPM_TOKEN` in your repository.

4. Run `yarn commit` to prompt for conventional changelog standard and commit changes.

5. For publishing a package to `NPM`, [see this guide for more information](https://github.com/waldronmatt/shareable-configs/blob/main/docs/PUBLISHING.md).

## Automating Config Creation on Install

You can optionally include a `postinstall` script in your package to automatically create a configuration file in your project's root directory when you install it:

**`packages/eslint-config/package.json`**

```json
"scripts": {
  "postinstall": "node scripts/postinstall.js"
},
```
