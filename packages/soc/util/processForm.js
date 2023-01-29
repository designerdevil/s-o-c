const busboy = require('busboy')
const config = require('./configurationUtil')

module.exports = {
    parseForm: (req, res) => new Promise((resolve, reject) => {
        let body = ''

        req.on('data', function (data) {
            body += data
        })

        req.on('end', function () {
            const modifiedBody = JSON.parse(body || '{}')
            const refactoredBody = config.generateConfig(modifiedBody);
            resolve(refactoredBody)
        })
    }),
    parseFile: (req, res) => new Promise((resolve, reject) => {
        let result = {
            files: []
        }
        const bb = busboy({ headers: req.headers })
        bb.on('file', (name, file, info) => {
            const { filename, encoding, mimeType } = info
            console.log(
                `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
                filename,
                encoding,
                mimeType
            )
            file.on('data', (data) => {
                console.log(`File [${name}] got ${data.length} bytes`)
                result.files.push({
                    file: data.toString('utf-8'),
                    fileName: filename,
                    contentType: mimeType
                })
            }).on('close', () => {
                console.log(`File [${name}] done`)
            })
        })
        bb.on('field', (name, value, info) => {
            console.log(`Field [${name}]: value: %j`, value)
            if(name === "metaData") {
                result['metaData'] = JSON.parse(value)
            }
        })
        bb.on('close', () => {
            console.log('Done parsing form!')
            req.body = result.files.reduce((acc, curr, index) => acc + curr.file, '')
            req.metaData = result.metaData
            resolve(req)
        })
        req.pipe(bb)
    })
}