const input = document.getElementById('file1')
let nodes = [[]]
let elements = [[]]
let isCart = false
let isBone = false

// runs as soon as a user selects a file
input.addEventListener('change', () => {
  const files = input.files

  if (draw.disabled) { // eslint-disable-line
    draw.disabled = false // eslint-disable-line
  }

  // Clearing nodes and element data if input file is changed
  nodes = [[]]
  elements = [[]]
  sessionStorage.clear()

  isCart = false
  isBone = false

  if (files.length === 0) return // check for empty files

  const file = files[0]
  const filename = file.name
  const fileExt = filename.split('.').pop() // splits the string on '.' and returns the last array element, which will be the file extension/type

  if (fileExt !== 'inp') { // ensures that files are .inp files before attempting to parse them
    alert('Geometry files must be in .inp format') // alerts the user if files are not .inp
    return
  }

  if (filename.toLowerCase().includes('cart')) { // makes filename case insensitive & checks for cartilage file naming convention
    isCart = true
  } else if (filename.toLowerCase().includes('bone')) { // makes filename case insensitive & checks for bone file naming convention
    isBone = true
  } else {
    alert('File name does not specify whether it is a bone or cartilage file') // alerts the user if file does not follow expected file naming conventions
    return
  }

  console.log('isCart = ' + isCart) // for testing
  console.log('isBone = ' + isBone) // for testing

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
        console.log('matched node on line ' + (line + 1)) // for testing, +1 to account for 0 indexing
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
        console.log('matched element on line ' + (line + 1)) // for testing, +1 to account for 0 indexing
        line++
        count--
        nodes.splice(index, 1) // removes extra array that gets created in final loop but never filled because elements section is found
        break
      }

      const temp = sessionStorage.getItem('line ' + line).split(',') // split current line on commas
      // console.log(temp) // for testing
      temp.forEach(element => {
        nodes[index].push(element.trim()) // add each comma separated value to array
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
      if (isBone) { // bone files do not have any sections after the elements section. end point is end of file
        if (sessionStorage.getItem('line ' + line).search(/(^(\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm) !== (-1)) {
          console.log('matched end of file on line ' + (line + 1)) // for testing, +1 to account for 0 indexing
          elements.splice(index, 1) // removes extra array that gets created in final loop but never filled because end of file is found
          break
        }
      } else if (isCart) { // cartilage files have addtional sections of side nodes that we are currently ignoring, so the first side node section can act as EOF
        if (sessionStorage.getItem('line ' + line).search(/side/i) !== (-1)) {
          console.log('start of side nodes ' + (line + 1)) // for testing, +1 to account for 0 indexing
          elements.splice(index, 1) // removes extra array that gets created in final loop but never filled because start of side nodes is found
          break
        }
      }

      const temp = sessionStorage.getItem('line ' + line).split(',') // split current line on commas
      // console.log(temp) // for testing
      temp.forEach(element => {
        elements[index].push(element.trim()) // add each comma separated value to array
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

    sessionStorage.setItem('total nodes', length) // store total number of nodes in session data
    sessionStorage.setItem('initial node number', nodes[index][0]) // store initial node number in session data

    console.log('NODES SESSION DATA' + '\n' + 'total nodes: ' + sessionStorage.getItem('total nodes') + '\n' + 'node number, x, y, z' + '\n') // for testing
    console.log('starting node number: ' + sessionStorage.getItem('initial node number') + '\n') // for testing

    while (length >= 1) {
      sessionStorage.setItem('node ' + nodes[index][0] + ' x', nodes[index][1])
      // console.log(sessionStorage.getItem('node ' + nodes[index][0] + ' x')) // for testing

      sessionStorage.setItem('node ' + nodes[index][0] + ' y', nodes[index][2])
      // console.log(sessionStorage.getItem('node ' + nodes[index][0] + ' y')) // for testing

      sessionStorage.setItem('node ' + nodes[index][0] + ' z', nodes[index][3])
      // console.log(sessionStorage.getItem('node ' + nodes[index][0] + ' z')) // for testing

      console.log(nodes[index][0] + ' ' + sessionStorage.getItem('node ' + nodes[index][0] + ' x') + ' ' + sessionStorage.getItem('node ' + nodes[index][0] + ' y') + ' ' + sessionStorage.getItem('node ' + nodes[index][0] + ' z')) // for testing */

      index++
      length--
    }

    index = 0 // reset array index for element session storage
    length = elements.length // reset length to number of elements in final element array

    sessionStorage.setItem('total elements', length) // store total number of elements in session data
    sessionStorage.setItem('initial element number', elements[index][0]) // store initial element number in session data

    console.log('ELEMENTS SESSION DATA' + '\n' + 'total elements: ' + sessionStorage.getItem('total elements') + '\n' + 'element number, node 1, node 2, node 3' + '\n') // for testing
    console.log('starting element number: ' + sessionStorage.getItem('initial element number') + '\n') // for testing

    while (length >= 1) {
      sessionStorage.setItem('element ' + elements[index][0] + ' node 1', elements[index][1])
      // console.log(sessionStorage.getItem('element ' + elements[index][0] + ' node 1')) // for testing

      sessionStorage.setItem('element ' + elements[index][0] + ' node 2', elements[index][2])
      // console.log(sessionStorage.getItem('element ' + elements[index][0] + ' node 2')) // for testing

      sessionStorage.setItem('element ' + elements[index][0] + ' node 3', elements[index][3])
      // console.log(sessionStorage.getItem('element ' + elements[index][0] + ' node 3')) // for testing

      if (isBone) { // this test statement is only helpful for bone files
        console.log(elements[index][0] + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 1') + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 2') + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 3')) // for testing
      } else if (isCart) { // only cartilage files have more than 3 nodes per element
        sessionStorage.setItem('element ' + elements[index][0] + ' node 4', elements[index][4])

        sessionStorage.setItem('element ' + elements[index][0] + ' node 5', elements[index][5])

        sessionStorage.setItem('element ' + elements[index][0] + ' node 6', elements[index][6])

        sessionStorage.setItem('element ' + elements[index][0] + ' node 7', elements[index][7])

        sessionStorage.setItem('element ' + elements[index][0] + ' node 8', elements[index][8])

        console.log(elements[index][0] + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 1') + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 2') + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 3') + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 4') + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 5') + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 6') + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 7') + ' ' + sessionStorage.getItem('element ' + elements[index][0] + ' node 8')) // for testing
      }

      index++
      length--
    }
  }
  reader.onerror = (e) => alert(e.target.error.name)
})
