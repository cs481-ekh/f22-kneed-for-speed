const input = document.getElementById('file1')

// const submit = document.getElementById('submit') // Don't need this yet

const nodes = [[]]
const elements = [[]]

// runs as soon as a user selects a file - needs some additional file-type safety
input.addEventListener('change', () => {
  const files = input.files

  if (files.length === 0) return

  const file = files[0]

  const reader = new FileReader()

  reader.readAsText(file)

  // Reads in file line by line and stores each line as sessionStorage item
  reader.onload = (e) => {
    const file = e.target.result
    const lines = file.split(/\r\n|\n/)
    let count = 0 // using 0 indexing
    lines.forEach(element => {
      sessionStorage.setItem('line ' + count, element)
      // console.log(sessionStorage.getItem('line ' + count)) // for testing
      count++
    })

    let line = 0 // current line in file, using 0 indexing again

    // find start of NODE section
    while (count >= 0) {
      if (sessionStorage.getItem('line ' + line).search(/node/i) !== (-1)) {
        console.log('matched node on line ' + line) // for testing
        line++
        count--
        break
      }
      line++
      count--
    }

    let index = 0 // current node array index, using 0 indexing again

    // Store Node elements until Element section begins
    while (count >= 0) {
      if (sessionStorage.getItem('line ' + line).search(/element/i) !== (-1)) {
        console.log('matched element on line ' + line) // for testing
        line++
        count--
        break
      }

      const temp = sessionStorage.getItem('line ' + line).split(',') // split current line on commas
      // console.log(temp) // for testing
      temp.forEach(element => {
        nodes[index].push(element) // add each comma separated value to array
        // console.log(nodes) // for testing
      })

      index++
      nodes.push([]) // add new array for next node (creates multidemensional array)

      line++
      count--
    }

    // console.log(nodes) // for testing

    index = 0 // reset array index for elements

    // Store Element elements until end of file
    while (count >= 0) {
      if (sessionStorage.getItem('line ' + line).search(/(^(\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm) !== (-1)) {
        console.log('matched end of file on line ' + line) // for testing
        break
      }

      const temp = sessionStorage.getItem('line ' + line).split(',') // split current line on commas
      // console.log(temp) // for testing
      temp.forEach(element => {
        elements[index].push(element) // add each comma separated value to array
        // console.log(elements) // for testing
      })

      index++
      elements.push([]) // add new array for next element (creates multidemensional array)

      line++
      count--
    }

    console.log('FINAL NODE ARRAY' + '\n') // for testing
    console.log(nodes)
    console.log('FINAL ELEMENT ARRAY' + '\n') // for testing
    console.log(elements)

    index = 0 // reset array index for node session storage
    let length = nodes.length // number of nodes in final node array
    console.log('NODES SESSION DATA' + '\n' + 'total nodes: ' + length + '\n' + 'node number, x, y, z' + '\n') // for testing

    while (length > 1) {
      sessionStorage.setItem('node ' + nodes[index][0] + ' x', nodes[index][1])
      // console.log(sessionStorage.getItem('node ' + nodes[index][0] + ' x')) // for testing

      sessionStorage.setItem('node ' + nodes[index][0] + ' y', nodes[index][2])
      // console.log(sessionStorage.getItem('node ' + nodes[index][0] + ' y')) // for testing

      sessionStorage.setItem('node ' + nodes[index][0] + ' z', nodes[index][3])
      // console.log(sessionStorage.getItem('node ' + nodes[index][0] + ' z')) // for testing

      console.log(nodes[index][0] + sessionStorage.getItem('node ' + nodes[index][0] + ' x') + sessionStorage.getItem('node ' + nodes[index][0] + ' y') + sessionStorage.getItem('node ' + nodes[index][0] + ' z')) // for testing */

      index++
      length--
    }

    index = 0 // reset array index for element session storage
    length = elements.length // reset length to number of element in final element array
    console.log('ELEMENTS SESSION DATA' + '\n' + 'total elements: ' + length + '\n' + 'node 1, node 2, node 3, node 4' + '\n') // for testing

    while (length > 1) {
      sessionStorage.setItem('element ' + index + 'node 1', elements[index][0])
      // console.log(sessionStorage.getItem('element ' + index + 'node 1')) // for testing

      sessionStorage.setItem('element ' + index + 'node 2', elements[index][1])
      // console.log(sessionStorage.getItem('element ' + index + 'node 2')) // for testing

      sessionStorage.setItem('element ' + index + 'node 3', elements[index][2])
      // console.log(sessionStorage.getItem('element ' + index + 'node 3')) // for testing

      sessionStorage.setItem('element ' + index + 'node 4', elements[index][3])
      // console.log(sessionStorage.getItem('element ' + index + 'node 4')) // for testing

      console.log(sessionStorage.getItem('element ' + index + 'node 1') + sessionStorage.getItem('element ' + index + 'node 2') + sessionStorage.getItem('element ' + index + 'node 3') + sessionStorage.getItem('element ' + index + 'node 4')) // for testing

      index++
      length--
    }
  }
  reader.onerror = (e) => alert(e.target.error.name)
})
