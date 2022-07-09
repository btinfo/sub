// package requirement
// nodejs
let path = require('path')
let util = require('./util')
let base64 = util.base64
let readSync = util.readSync
let writeSync = util.writeSync

let BUILD_DIR = '.'
let ENTRY_FILE = './node.txt'
let str = readSync(ENTRY_FILE)

let checker = item => {
    return item => item.includes('ssr://') || item.includes('ss"//')
}

let result = str.split('\n\n')
                .filter(item => checker(item))
                .join('\r\n')

writeSync(path.resolve(__dirname, BUILD_DIR, 'node'), base64(result))
