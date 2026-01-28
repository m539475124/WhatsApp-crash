// Module
const fs = require('fs')
// Token React Ch
global.tokens = ["isi token lu"]
global.connect = true
//
global.publicX = true 
//
global.owner = ['967784987197'] 
//
//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
