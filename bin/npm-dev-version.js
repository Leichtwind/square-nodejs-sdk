/* eslint-disable @typescript-eslint/no-unsafe-call */
const { readFileSync, writeFileSync } = require('fs');
const branch = require('git-branch');
const parseArgs = require('minimist');
const { SemVer } = require('semver');

const { p = '.' } = parseArgs(process.argv.slice(2));

void (async () => {
    const packageJsonPath = `${p}/package.json`;
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
    const { version } = packageJson;
    const branchName = await branch('.');

    const ticketNumber = /^(feature|feat|hotifx|fix)\/(\d+)/gim.exec(branchName)?.[0]?.split('/').pop();
    const semVer = new SemVer(version);

    if (!semVer) {
        throw new Error(`Can't find package.json version`);
    }

    console.log('Input data', { packageJsonPath, branchName, ticketNumber, version: semVer.format() });

    if (!semVer.prerelease.length && !ticketNumber) {
        throw new Error(`Your branch should contain the ticket number or the package.json version should be with the prerelease version`);
    }
    if (semVer.prerelease.length && Number.isSafeInteger(semVer.prerelease[semVer.prerelease.length - 1])) {
        // @ts-ignore
        semVer.prerelease[semVer.prerelease.length - 1]++;
    } else if (ticketNumber) {
        semVer.prerelease = [`dev`, ticketNumber, 0];
    }

    console.log('Output data', { packageJsonPath, branchName, ticketNumber, version: semVer.format() });

    packageJson.version = semVer.format();
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 4));
})();
