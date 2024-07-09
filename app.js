const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','text.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//returns an absloute path 
const absloute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absloute)