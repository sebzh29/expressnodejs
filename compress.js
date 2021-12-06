var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt.gz').pipe(zlib.createGunZip()).pipe(fs.createWriteStream('input.txt'))
//