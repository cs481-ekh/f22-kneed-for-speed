const input = document.getElementById('file')

// const submit = document.getElementById('submit') Don't need this yet

const nodes = [[]]
// const elements = [[]] Don't need this yet

// runs as soon as a user selects a file - needs some additional file-type safety
input.addEventListener('change', () => {
  let files = input.files

  if(files.length == 0) return

  const file = files[0]

  let reader = new FileReader()

  reader.readAsText(file)

  //Reads in file line by line and stores each line as sessionStorage item
  reader.onload = (e) => {
    const file = e.target.result
    const lines = file.split(/\r\n|\n/)
    let count = 0 // using 0 indexing
    lines.forEach(element => {
      sessionStorage.setItem("line " + count,element)
      console.log(sessionStorage.getItem("line " + count)) // statement for testing
      count++
    });

    let line = 0; // current line in file, using 0 indexing again

    // find start of NODE section
    while (count >= 0) {
      if (sessionStorage.getItem("line " + line).search(/node/i) != (-1)) {
        console.log("matched node on line "+ line); // statement for testing
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
        if (sessionStorage.getItem("line " + line).search(/element/i) != (-1)) {
          console.log("matched element on line "+ line) // statement for testing
          line++
          count--
          break
        }

        let temp = sessionStorage.getItem("line " + line).split(',') // split current line on commas
        console.log(temp) // statement for testing
        temp.forEach(element => {
          nodes[index].push(element) // add each comma separated value to array
          console.log(nodes) // statement for testing
        });

        index++
            nodes.push([]); // add new array for next node (creates multidemensional array)

        line++
        count--
      }

      index = 0; // reset array index for elements

      //Store Element elements until end of file
      while (count >= 0) {
        if (sessionStorage.getItem("line " + line).search(/(^(\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm) != (-1)) {
          console.log("matched end of file on line "+ line) // statement for testing
          break
        }
        line++
        count--
      }
    }

  reader.onerror = (e) => alert(e.target.error.name)

})