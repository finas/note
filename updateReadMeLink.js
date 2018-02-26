(function () {
    const test = true
    const relativePath = test ? 'd:/code/sharing' : '.'
    const rp = function (path) {
        return require('path').resolve(relativePath, path)
    }
    const tmpFile = rp('./__tmp__.md'), treeFile = rp('./tree.md'), readMeFile = rp('./README.md')

    let appendFileLink = function (lineArr) {
        let pathArr = []
        for (let i = 0; i < lineArr.length; i++) {
            let otherBeforeFileReg = /^(\+|\s|\\|\|)[-\|\s\\\+]+/;
            let [prev] = lineArr[i].match(otherBeforeFileReg)
            let fileOrFolderName = lineArr[i].replace(otherBeforeFileReg, '')
            // exclude the empty string
            if (fileOrFolderName) {
                pathArr.push({
                    deepth: prev.length,
                    fileOrFolderName
                })
            }
        }

        // init set the first path
        pathArr[0].prevPath = '.'
        pathArr[0].currentPath = pathArr[0].prevPath + '/' + pathArr[0].fileOrFolderName

        let closetSamePath = {}
        closetSamePath[pathArr[0].deepth] = pathArr[0].prevPath
        for (let i = 1; i < pathArr.length; i++) {
            let current = pathArr[i]
            let prev = pathArr[i - 1]
            if (current.deepth == prev.deepth) {
                current.prevPath = prev.prevPath
            } else if (current.deepth < prev.deepth) {
                if (closetSamePath[current.deepth]) {
                    current.prevPath = closetSamePath[current.deepth]
                }

            } else {
                current.prevPath = prev.currentPath
            }
            closetSamePath[current.deepth] = current.prevPath
            current.currentPath = current.prevPath + '/' + current.fileOrFolderName

        }
        // filter empty 
        // lineArr = lineArr.filter(line => !line.endsWith('   '))
        pathArr = pathArr.map(path => path.currentPath)

        // wrap file with <a>
        for (let i = 0; i < lineArr.length; i++) {
            lineArr[i] = lineArr[i].replace(/[^|+\s-_].+/, matched => matched.endsWith('md') ? `<a href="${pathArr[i]}">${matched}</a>` : matched)
        }
        return lineArr
    }

    let updateREADME = function (lineArr) {
        const fs = require('fs')
        const callback = () => {
            let ws = fs.createWriteStream(tmpFile, { flags: 'a' })
            ws.write('<pre>\r\n')
            for (let i = 0; i < lineArr.length; i++) {
                ws.write(lineArr[i] + '\r\n')
            }
            let copy2ReadMe = function () {
                Promise.all([
                    new Promise((r, j) => {
                        fs.readFile(tmpFile, 'utf-8', (err, data) => {
                            if (err) {
                                j()
                                return
                            }
                            r(data)
                            fs.unlink(tmpFile, err => {
                                if (err) {
                                    console.error(err);
                                    return
                                }
                                console.log(`--- delete ${tmpFile} ---`)
                            })
                        })
                    }),
                    new Promise((r, j) => {
                        fs.readFile(readMeFile, 'utf-8', (err, data) => {
                            if (err) {
                                j()
                                return
                            }
                            r(data)
                        })
                    })
                ]).then(result => {
                    let [newTreeStr, readMeStr] = result
                    readMeStr = readMeStr.replace(/<\!-- START_PROJECT_STRUCTURE -->((\s|\S)+)<\!-- END_PROJECT_STRUCTURE -->/, `<!-- START_PROJECT_STRUCTURE -->${'\r\n' + newTreeStr + '\r\n'}<!-- END_PROJECT_STRUCTURE -->`)
                    fs.writeFile(readMeFile, readMeStr, err => {
                        if (err) {
                            console.error(err)
                            return
                        }
                        console.log(`--- update ${readMeFile} successfully ---`)
                    })
                })

            }
            ws.on('finish', function () {
                fs.unlink(treeFile, err => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    console.log('--- delete ${treeFile} ---')
                })
                copy2ReadMe()
                fs.readFile(tmpFile, 'utf-8', data => {

                })
            })

            ws.end('</pre>')
            // fs.createReadStream(tmpFile).on('end',function(){
            // fs.unlink(tmpFile,()=>{})
            // fs.unlink(treeFile,()=>{})
            // }).pipe(fs.createWriteStream('./tree_result.md'))
        }
        fs.writeFile(tmpFile, '', callback)
    };
    (function () {
        let lineArr = [];
        const lineReader = require('readline').createInterface({
            input: require('fs').createReadStream(treeFile)
        });
        lineReader.on('line', function (line) {
            if (line.startsWith('+') || line.startsWith('|')) {
                if (!line.endsWith('   ')) {
                    lineArr.push(line)
                }
            }
        });
        lineReader.on('close', () => {
            let data = appendFileLink(lineArr)
            updateREADME(data)
        })
    })()
})()