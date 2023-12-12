// GLOBALS

// __dirname  - path to current dir
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about the current module (file)
// process    - info about the environment where the program is being executed

console.log(__filename);
setInterval(() => {
  console.log(`Hello World`);
}, 1000);
