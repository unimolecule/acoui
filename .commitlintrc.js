const fs = require('fs')
const path = require('path')
const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))
const apps = fs.readdirSync(path.resolve(__dirname, 'apps'))

module.exports = {
  extends:['@commitlint/config-conventional'],
  prompt: {
    useEmoji:true,
    scopes: [...packages,...apps]
  }
}
