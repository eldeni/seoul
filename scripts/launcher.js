const { argv } = require('yargs');
const { createLauncher, proc } = require('process-launch');
const { logger } = require('jege/server');

const log = logger('[monorepo-seoul]');

const processDefinitions = {
  sandbox: proc(
    'node',
    [
      './scripts/launch.js',
      ...argv._,
    ],
    {
      cwd: `./packages/sandbox`,
      stdio: 'inherit',
    },
  ),
};

function launcher() {
  try {
    log('launcher(): argv: %j', argv);

    const Launcher = createLauncher({
      processDefinitions,
    });

    Launcher.run({
      process: argv.process,
    });
  } catch (err) {
    log('launcher(): Error reading file', err);
  }
}

module.exports = launcher;

if (require.main === module) {
  launcher();
}
