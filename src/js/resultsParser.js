const fs = require('fs')
const csv = require('fast-csv')
const file1 = 'headers.csv'
const file2 = 'CART-TIBIA-LAT_LE.csv'
const fileData1 = []
const fileData2 = []

const file1Promise = new Promise((resolve) => {
  csv
    .parseFile(file1, { headers: false })
    .on('data', function (data) {
      fileData1.push(data)
    })
    .on('end', function () {
      console.log('done')
      resolve()
    })
})

const file2Promise = new Promise((resolve) => {
  csv
    .parseFile(file2, { headers: false })
    .on('data', function (data) {
      fileData2.push(data)
    })
    .on('end', function () {
      console.log('done')
      resolve()
    })
})

Promise.all([
  file1Promise,
  file2Promise
])
  .then(() => {
    const fileData3 = fileData1.concat(fileData2)
    const csvStream = csv.format({ headers: true })
    const writableStream = fs.createWriteStream('outputfile.csv')

    writableStream.on('finish', function () {
      console.log('DONE!')
    })

    csvStream.pipe(writableStream)
    fileData3.forEach((data) => {
      csvStream.write(data)
    })
    csvStream.end()
  })
