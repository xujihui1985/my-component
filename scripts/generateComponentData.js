const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const parse = require('react-docgen').parse;
const chokidar = require('chokidar');

const paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js'),
};

const enableWatchMode = process.argv.slice(2) === '--watch';
if (enableWatchMode) {
  chokidar
    .watch([paths.examples, paths.components])
    .on('change', (event, path) => generate(paths));
} else {
  generate(paths);
}

function generate(paths) {
  const errors = [];
  const componentData = getDirectories(paths.components).map((componentName) => {
    try {
      return getComponentData(paths, componentName)
    } catch (e) {
      errors.push(`An error occurrec while generte metadata for ${componentName} error: ${e}`);
    }
  });
  writeFile(paths.output, "module.exports = " + JSON.stringify(componentData));
}


function getComponentData(paths, componentName) {
  const filepath = path.join(paths.components, componentName, componentName + '.js');
  const content = fs.readFileSync(filepath, 'utf-8');
  const info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName),
  };
}

function getExampleData(examplesPath, componentName) {
  const examples = getExampleFiles(examplesPath, componentName);
  return examples.map((file) => {
    const filepath = path.join(examplesPath, componentName, file);
    const content = fs.readFileSync(filepath, 'utf-8');
    const info = parse(content);
    return {
      name: file.slice(0, -3),
      description: info.description,
      code: content
    }
  });
}

function getExampleFiles(examplesPath, componentName) {
  let exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch (e) {
    console.log(chalk.red(e));
  }
  return exampleFiles;
}

function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(f => fs.statSync(path.join(filepath, f)).isDirectory());
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(f => fs.statSync(path.join(filepath, f)).isFile());
}

function writeFile(filepath, content) {
  fs.writeFileSync(filepath, content);
}

