# Husky Setup

## Install

```bash
yarn add -D husky
```

## Add an NPM Script

Running this command:

```bash
npm set-script prepare "husky install"
```

Will create:

**`package.json`**

```json
"scripts": {
  "prepare": "husky install"
},
```

## Run Husky

```bash
yarn prepare
```
