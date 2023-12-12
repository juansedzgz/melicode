// CommonJs, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require(`./4-names-mine`);
const sayHi = require(`./5-utils-mine`);
const data = require(`./6-alternative-flavour-mine`);
require(`./7-mind-grenade-mine`);
console.log(data);

sayHi(`Susan`);
sayHi(names.john);
sayHi(names.peter);
