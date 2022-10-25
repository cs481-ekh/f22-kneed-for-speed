let input = document.getElementById('file');
let submit = document.getElementById('submit');

const nodes = [[],[],[],[]];
const elements = [[],[],[],[]];

// runs as soon as a user selects a file - needs some additional file-type safety
input.addEventListener('change', () => {
    let files = input.files;

    if(files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    //Reads in file line by line and stores each line as sessionStorage item
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        let count = 0; // using 0 indexing
        lines.forEach(element => {
            sessionStorage.setItem("line " + count,element);
            console.log(sessionStorage.getItem("line " + count));
            count++;
        });

        let line = 0; // current line, using 0 indexing again


        // find start of NODE section
        while (count >= 0) {
            if (sessionStorage.getItem("line " + line).search(/node/i) != (-1)) {
                console.log("matched node on line "+ line);
                line++;
                count--;
                break;
            }
            line++;
            count--;
        }

        let index = 0; // current node array index, using 0 indexing again

        // Store Node elements until Element section begins
        while (count >= 0) {
            if (sessionStorage.getItem("line " + line).search(/element/i) != (-1)) {
                console.log("matched element on line "+ line);
                line++;
                count--;
                break;
            }

            let temp = sessionStorage.getItem("line " + line).split(',');
            console.log(temp);
            temp.forEach(element => {
                nodes[index].push(element);  
                console.log(nodes);   
            });

            index++;
            nodes.push([]);

            line++;
            count--;
        }

        index = 0; // reset array index for elements, using 0 indexing again

        //Store Element elements until end of file
        while (count >= 0) {
            if (sessionStorage.getItem("line " + line).search(/(^(\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm) != (-1)) {
                console.log("matched end of file on line "+ line);
                break;
            }
            line++;
            count--;
        }
    }

    reader.onerror = (e) => alert(e.target.error.name);

});