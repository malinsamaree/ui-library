#!/usr/bin/env node

const fs = require('fs');

const {execSync} = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/malinsamaree/ui-library.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
const setupNameCommand = `cd ${repoName} && npm pkg set name=${repoName}`;
const setupVersionCommand = `cd ${repoName} && npm pkg set version=1.0.0`;
const setupDeleteBinCommand = `cd ${repoName} && npm pkg delete bin`;

console.log(`Cloning the repository - ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if(!checkedOut) process.exit(-1);

console.log(`Project setup`)
runCommand(setupNameCommand);
runCommand(setupVersionCommand);
runCommand(setupDeleteBinCommand);


console.log(`Installing dependencies`);

const installedDeps = runCommand(installDepsCommand);

if(!installedDeps) process.exit(-1);

fs.rmSync(`./${repoName}/bin`, {recursive: true, force: true});

console.log("Happy hacking!!!");