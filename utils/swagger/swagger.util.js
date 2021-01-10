const fs = require('fs')

function saveJSON (jsonFile) {
  // create if not exist folder
  if (!fs.existsSync('./swagger')) fs.mkdirSync('./swagger')

  fs.writeFileSync('./swagger/swagger.json', jsonFile, 'utf8', function (err) {
    if (err) console.log('An error occured while writing JSON Object to File.')
    else console.log('Swagger File Generated!')
  })
}

module.exports.saveJSON = saveJSON
