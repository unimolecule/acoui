const fs = require('fs')
const path = require('path')
const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))

module.exports = {
  extends:['@commitlint/config-conventional'],
  prompt: {
    useEmoji:true,
    scopes: [...packages]
  }
}
