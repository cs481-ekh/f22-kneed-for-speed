const resultInput = document.getElementById('file2')
let resultOutput = [[]]
let highestForce = 0.9
let lowestForce = 0.1

// Event listener listening to the choose file button for Results file. Code is executed on press of that button, not Draw
resultInput.addEventListener('change', () => {
  const resultFiles = resultInput.files

  if (draw.disabled) { // eslint-disable-line
    draw.disabled = false // eslint-disable-line
  }

  // Clearing data from resultOutput if input file is changed
  resultOutput = [[]]

  if (resultFiles.length === 0) return

  const file = resultFiles[0]
  const resultReader = new FileReader()
  resultReader.readAsText(file)

  // Reader opens file and parses all values, force and element number, into 2d array
  resultReader.onload = (e) => {
    const resFile = e.target.result
    const resLines = resFile.split(/\r\/|\n/)
    // console.log(resLines.length)
    let indexCount = resLines.length

    let index = 0
    while (indexCount > 0) {
      const placehold = resLines[index].split(',')
      placehold.forEach(element => {
        resultOutput[index].push(parseFloat(element.slice(1))) // turning strings into ints, trimming off extra spaces
      })
      resultOutput.push([])
      index++
      indexCount--
    }

    // finding the highest force value in the first row and column for canvas.js to use
    const rowLength = resultOutput[0].length
    let resultHighestVal = 0
    let resultColumnToUse = 0
    let resultLowestVal = Number.MAX_SAFE_INTEGER
    // Double for loop finds highest force value in the file and the column that value belongs to

    for (let i = 1; i < rowLength; i++) {
      if (resultOutput[0][i] > resultHighestVal) {
        resultHighestVal = resultOutput[0][i]
        resultColumnToUse = i
      }
    }

    // finding the lowest value in columnToUse
    for (let i = 0; i < index; i++) {
      if (resultOutput[i][resultColumnToUse] < resultLowestVal) {
        resultLowestVal = resultOutput[i][resultColumnToUse]
      }
    }
    // These values are assigned here and referenced in canvas.js
    highestForce = resultHighestVal
    lowestForce = resultLowestVal
    console.log(highestForce)
    console.log(lowestForce)
  }
})
