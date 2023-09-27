//import the necessary modules
const fs = require('fs').promises;
const path = require('path');
const wordCount = require('word-count');


const configPath = path.join(__dirname, 'config.json');
const config = require(configPath);
const filePaths = config.files;

//function that process each file alone 
async function processFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');

    if (!content.trim()) {
      console.log(`${filePath}: Empty file`);
    } else {
      const wordCountResult = wordCount(content);
      console.log(`${filePath}: ${wordCountResult} words`);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`File not found: ${filePath}`);
    } else {
      console.error(`Error reading ${filePath}: ${err}`);
    }
  }
}
// function that send each file to processFile in async 
async function processFiles() {
  for (const filePath of filePaths) {
    const absoluteFilePath = path.join(__dirname, filePath);
    await processFile(absoluteFilePath);
  }
}

processFiles();
