# Personal Use

Documentation for personal use.

## Getting Started

1. Update the root `package.json` with your repository name, url, and version.

2. Modify `packages/` to suit your needs.

3. Generate a `publish` access token from `NPM` and save as a secret titled `NPM_TOKEN` in your repository.

4. Run `yarn commit` to prompt for conventional changelog standard and commit changes.

## Dependency Management

Install workspace dependencies

```bash
yarn add [package-name] -D -W
```

Remove workspace dependencies

```bash
yarn remove [package-name] -W
```

Install dependencies for a package

```bash
cd packages/[package-name]
```

```bash
yarn add [package-name]
```

Sync `dependabot` changes made to `yarn.lock` with `package.json` files in `packages/`:

```bash
yarn syncyarnlock -s -k
```

```bash
yarn
```

**Note**: This will trigger a new release for projects with a modified `package.json` and applicable commit type.
