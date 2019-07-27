var fs = require('fs');

async function readFileContents(filePath) {

    return new Promise(function (fulfill, reject){
        var readStream = fs.createReadStream(filePath);
        var fileContents = [];
        var remainingContent = '';

        readStream.on('data', function(data) {
            remainingContent += data;
            var index = remainingContent.indexOf('\n');
            var last  = 0;
            while (index > -1) {
                var line = remainingContent.substring(last, index);
                last = index + 1;
                fileContents.push(JSON.parse(line));
                index = remainingContent.indexOf('\n', last);
            }

            remainingContent = remainingContent.substring(last);
        });

        readStream.on('end', function() {
            return fulfill(fileContents);
        });
    });
}

module.exports = {
    readFileContents
}


