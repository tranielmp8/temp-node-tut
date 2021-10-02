// Modules
// CommonJS, every fill in node is a module (by default)
//everytime you create your own module you have to start with . before the module
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require('./7-mind-grenade')

sayHi('Traniel')
sayHi(names.john)
sayHi(names.peter)
