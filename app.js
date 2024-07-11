// npm - global command, come with node
// npm --versions 
// npm --v

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packagName>

// package.json - manifest file( stores important informaiton about the project/packages)
// manual approach ( create a package.json in the roor, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything is default)

//Eg npm i lodash

const _= require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)