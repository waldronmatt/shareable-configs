# Publishing

A quick overview for publishing packages using this repo.

## Initial Publishing

As [documented in this issue](https://github.com/lerna/lerna/issues/2325), `lerna` does not supporting publishing an initial `1.0.0` version with conventional commits using `lerna` `publish`.

I recommend using a [tool called `np`](https://github.com/sindresorhus/np) to take care of the initial publishing.

This would be done by navigating to the package directory and running the `np` command.

## Subsequent Publishes

For all other subsequent publishes, `lerna` will automatically detect changes to packages and version based on conventional commits.
