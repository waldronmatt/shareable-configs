Commitizen Setup

## Install

```bash
yarn add -D commitizen cz-conventional-changelog
```

## Usage

**`.czrc`**

```bash
{
  "path": "cz-conventional-changelog"
}
```

## Add an NPM Script

Running this command:

```bash
npm set-script commit "git-cz"
```

Will create:

**`package.json`**

```json
"scripts": {
  "commit": "git-cz"
},
```
