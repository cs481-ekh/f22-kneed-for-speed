const resultInput = document.getElementById('file2')
const resultOutput = [[]]
let highestForce = 0.9
let lowestForce = 0.1

resultInput.addEventListener('change', () => {
  const resultFiles = resultInput.files

  if (resultFiles.length === 0) return

  const file = resultFiles[0]
  const resultReader = new FileReader()
  resultReader.readAsText(file)

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
    highestForce = resultHighestVal
    lowestForce = resultLowestVal
  }
})