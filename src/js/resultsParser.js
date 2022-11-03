
const resultInput = document.getElementById('file2')
const resultOutput = [[]]

resultInput.addEventListener('change', () => {
  const resultFiles = resultInput.files
  
  if (resultFiles.length === 0) return

  const file = resultFiles[0]
  const resultReader = new FileReader()
  resultReader.readAsText(file)

  resultReader.onload = (e) => {
    const resFile = e.target.result
    const resLines = resFile.split(/\r\/|\n/)
    console.log(resLines.length)
    let indexCount = resLines.length
   
    let index = 0
    while (indexCount > 0) {
      const placehold = resLines[index].split(',')
      placehold.forEach(element => {
        resultOutput[index].push(element)
      })
      resultOutput.push([])
      index++
      indexCount--
    }
    console.log("First elements results: " + resultOutput[0])
    console.log("Element Num " + resultOutput[0][0])
    console.log("first time " + resultOutput[0][1])
    console.log("last time " + resultOutput[0][240])
  }
})
