const fs = require('fs');
const path = require('path');
const parseArgs = require('minimist');

async function run() {
  const { from = '.', to = './dist' } = parseArgs(
    process.argv.slice(2)
  );
  console.log({ from, to });

  const { scripts, devDependencies, husky, files, 'lint-staged': lintStaged, directories, config, ...packageJson } = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), `./${from}/package.json`)).toString(),
  );

  packageJson.main = './index.js';
  packageJson.types = './index.d.ts';
  packageJson.module = './square.esm.js';
  packageJson.sideEffects = false;

  fs.writeFileSync(`${to}/package.json`, JSON.stringify(packageJson, null, 4));

  const copyFiles = ['README.md'];
  for (const file of copyFiles) {
    const fromPath = `${from}/${file}`;
    if (!fs.existsSync(fromPath)) {
      console.warn(`WARN: File "${fromPath}" doesn't exist`);
      continue;
    }

    fs.copyFileSync(fromPath, `${to}/${file}`);
  }
}

void run();
