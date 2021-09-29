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

### Changesets flow

1. Make changes to code
2. Run `pnpx changeset`
3. Commit generated changeset file with PR
4. Merge PR
5. `pnpx changeset version` to bump versions and generate changelogs
6. Publish to npm via `pnpm publish -r` or `changeset publish`

## Reference projects

- [Release workflow with changesets](https://colebemis.com/release-workflow-with-changesets/)
- https://github.com/remirror/template/blob/main/.github/workflows/publish.yml
- https://github.com/electron-userland/electron-builder/blob/master/.github/workflows/pr-release.yml

## Alt approaches

- [npm-workspaces-example](https://github.com/DavidWells/npm-workspaces-example)
- [lerna-example](https://github.com/DavidWells/lerna-example)