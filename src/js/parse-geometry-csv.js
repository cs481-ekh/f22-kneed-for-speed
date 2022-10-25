let nodes = [[]]
let nodeIndex = 0
let elements = [[]]
let elementIndex = 0

input.addEventListener('change', () => {
  
  /* file validation 
  let files = input.files;
  if(files.length == 0) {
    alert('No files chosen')
    return;
  }
  const file = files[0];

  let filename = file.name.toLowerCase()
  var regex = new RegExp('(.*?)\.(csv)$')
  if(!(regex.test(filename))){
    alert('Invalid file. Please upload a csv file.')
    return false
  } */

  let files = input.files
  const file = files[0]
  /* read the file line by line using sessionStorage [lines[index], line] */
  let reader = new FileReader()
  reader.readAsText(file)
  let lineIndex = 0
  reader.onload = (e) => {
    const file = e.target.result;
    const lines = file.split(/\r\n|\n/)
    lines.forEach(line => {
      sessionStorage.setItem('lines[' + lineIndex + ']', line)
      //console.log(sessionStorage.getItem('lines[' + lineIndex + ']')) 
      lineIndex++
    })
    let numOfLines = lineIndex
    console.log('numOfLines=', numOfLines)
    /* find start lineIndex of a Node section */
    lineIndex = 0
    while (lineIndex < numOfLines) {
      if (sessionStorage.getItem('lines[' + lineIndex + ']').search(/node/i) !== (-1)) {
        console.log('matched node on lines[' + lineIndex + ']') 
        lineIndex++
        break
      }
      lineIndex++
    }
    console.log('start lineIndex of a Node section is ', lineIndex)
    /* store Node section until Element section begins */
    while (lineIndex < numOfLines) {
      if (sessionStorage.getItem('lines[' + lineIndex + ']').search(/element/i) !== (-1)) {
        //console.log('matched element on lines[' + lineIndex + ']') 
        lineIndex++
        break
      }
      const lineData = sessionStorage.getItem('lines[' + lineIndex + ']').split(',') 
      //console.log(lineData)
      lineData.forEach( value => {
        nodes[nodeIndex].push(value) 
      })
      nodes.push([])
      //console.log(nodes)
      nodeIndex++
      
      lineIndex++
    }

    /* store Element section until end of file */
    while (lineIndex < numOfLines) {
      if (sessionStorage.getItem('lines[' + lineIndex + ']').search(/(^(\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm) !== (-1)) {
        //console.log('matched end of file on lines[' + lineIndex + ']') 
        break
      }
      lineData = sessionStorage.getItem('lines[' + lineIndex + ']').split(',') 
      //console.log(lineData)
      lineData.forEach(value => {
        elements[elementIndex].push(value) 
      })
      elements.push([])
      //console.log(elements)
      elementIndex++

      lineIndex++
    }

    /* test */
    console.log('FINAL NODE ARRAY' + '\n') 
    console.log(nodes)
    console.log('FINAL ELEMENT ARRAY' + '\n') 
    console.log(elements)
    
    console.log('NODES SESSION DATA' + '\n' + 'total nodes: ' + nodes.length + '\n' + 'node number, x, y, z' + '\n')
    nodeIndex = 0
    while (nodeIndex < nodes.length) {
        sessionStorage.setItem('node ' + nodes[nodeIndex][0] + ' x', nodes[nodeIndex][1])
        //console.log(sessionStorage.getItem('node ' + nodes[index][0] + ' x'))  

        sessionStorage.setItem('node ' + nodes[nodeIndex][0] + ' y', nodes[nodeIndex][2])
        //console.log(sessionStorage.getItem('node ' + nodes[index][0] + ' y')) 

        sessionStorage.setItem('node ' + nodes[nodeIndex][0] + ' z', nodes[nodeIndex][3])
        // console.log(sessionStorage.getItem('node ' + nodes[index][0] + ' z')) 

        console.log(nodes[nodeIndex][0] + sessionStorage.getItem('node ' + nodes[nodeIndex][0] + ' x') + sessionStorage.getItem('node ' + nodes[nodeIndex][0] + ' y') + sessionStorage.getItem('node ' + nodes[nodeIndex][0] + ' z')) 

        nodeIndex++
    }

  } // end of reader.onload
  reader.onerror = (e) => alert(e.target.error.name) 

})  // end of input.addEventListener

