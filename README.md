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


## Publishing Packages Flow

### 1. Update code

Write your code as normal on a feature branch and commit those changes.

If the changes require version bumps, run `npm run changeset` to generate a changeset file. These files will guide the automatic release process to npm and generate changelog information. 

```bash
git checkout -b new-feature
# Switched to a new branch 'new-feature'
git status
# On branch new-feature
# Changes not staged for commit:
# 	modified:   src/packages/package-a/src/index.js
git add .
git commit -m 'feature: new thingy'
# [new-feature 93ba650] feature: new thingy
#  1 file changed, 1 insertion(+), 1 deletion(-)
npm run changeset
# Run changeset CLI
# > changeset

# Choose the package(s)
# 🦋  Which packages would you like to include? · testing-pnpm-package-a
# Choose the type of bump
# 🦋  Which packages should have a major bump? · No items were selected
# 🦋  Which packages should have a minor bump? · No items were selected
# 🦋  The following packages will be patch bumped:
# 🦋  testing-pnpm-package-a@1.0.1
# 🦋  Please enter a summary for this change (this will be in the changelogs).
# 🦋  Summary · Added new thingy to package-a
# 🦋  === Releasing the following packages ===
# 🦋  [Patch]
# 🦋    testing-pnpm-package-a
# 🦋  Is this your desired changeset? (Y/n) · true
# 🦋  Changeset added! - you can now commit it
# 🦋
# 🦋  If you want to modify or expand on the changeset summary, you can find it here
# 🦋  info /repo-name/.changeset/green-beds-yell.md
git status
# On branch new-feature
# Untracked files:
# 	.changeset/green-beds-yell.md
git add .
git commit -m 'chore: changeset'
# [new-feature 369fe8f] chore: changeset
#  1 file changed, 5 insertions(+)
#  create mode 100644 .changeset/green-beds-yell.md
git push --set-upstream origin new-feature
```

### 2. Submit a pull request

Submit a pull request with your changes. If the pull request contains any new markdown files in the `.changeset/*.md` directory the following message will automatically appear in the pull request:

![image](https://user-images.githubusercontent.com/532272/135330462-174f7a22-5e40-4b3f-b08e-a07d6f2066a5.png)

This means the `testing-pnpm-package-a` and `testing-pnpm-package-c` will be bumped with a patch version number and a new pull request will be created with these new versions. 

### 3. Review the new "release" pull request

The changeset [github action](https://github.com/DavidWells/pnpm-workspaces-example/blob/master/.github/workflows/changeset-version.yml) will automatically bump any references to the changed packages and submit this new "release" pull request. [details](https://github.com/DavidWells/pnpm-workspaces-example/runs/3748166870?check_suite_focus=true#step:9:12)

Review the changes and verify everything looks correct.

![image](https://user-images.githubusercontent.com/532272/135332008-bb65c1b3-3986-480f-9388-69820f13238e.png)

### 4. Merge to publish to NPM

If the pull request in step 3 is merged into master, the packages will be automatically released to NPM. This again is driven by the same [github action](https://github.com/DavidWells/pnpm-workspaces-example/blob/master/.github/workflows/changeset-version.yml). [details](https://github.com/DavidWells/pnpm-workspaces-example/runs/3748310847?check_suite_focus=true#step:9:16)

![image](https://user-images.githubusercontent.com/532272/135331462-90404683-bb87-443e-b833-95980ff0b5bd.png)

### 5. View published packages on NPM

If the github action from step 4 completes successfully, the changes should be published to npm.

![image](https://user-images.githubusercontent.com/532272/135333470-be629127-9aa2-4935-89cf-bf9b469b6dcb.png)

![image](https://user-images.githubusercontent.com/532272/135333514-d75e4d87-8023-4541-ade3-c724ee15c249.png)

![image](https://user-images.githubusercontent.com/532272/135333657-c83561a7-d839-484b-877a-a6dc2a0042a7.png)
