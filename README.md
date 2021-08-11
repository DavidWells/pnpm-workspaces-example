# PNPM workspaces example for monorepos

Testing pnpm monorepo

## Install

```bash
npm install -g pnpm
pnpm install
```

## Running scripts


Add dependency to root dir with `-w` flag

```
pnpm add lodash -w -D
```

## Observations

`npm run build --ws` doesn't build packages in the correct order... For example `app` with dep `package-a` will build before `package-a`

## Alt approaches

- [npm-workspaces-example](https://github.com/DavidWells/npm-workspaces-example)
- [lerna-example](https://github.com/DavidWells/lerna-example)