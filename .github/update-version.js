const path = require("path")
const { writeFileSync } = require("fs")

const packageDir = path.resolve(__dirname, "../src/packages/")
const filePath = path.join(packageDir, "package-a/package.json")
const version = require(filePath).version

const versionFile = path.join(packageDir, 'package-a/src/version.js')

writeFileSync(versionFile, `export const PACKAGE_VERSION = "${version}"`)
console.log("Version file updated")