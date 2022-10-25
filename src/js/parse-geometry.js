let input = document.getElementById('file');
let submit = document.getElementById('submit');

input.addEventListener('change', () => {
    let files = input.files;

    if(files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        let count = 0;
        lines.forEach(element => {
            sessionStorage.setItem("line " + count,element);
            console.log(sessionStorage.getItem("line " + count));
            count++;
        });

        let line = 0;

        // find start of NODE section
        while (count >= 0) {
            if (sessionStorage.getItem("line " + line).search(/node/i) != (-1)) {
                line++;
                count--;
                console.log("matched node");
                break;
            }
            line++;
            count--;
        }

        // Store Node elements until Element section begins
        while (count >= 0) {
            if (sessionStorage.getItem("line " + line).search(/element/i) != (-1)) {
                line++;
                count--;
                console.log("matched element");
                break;
            }
            line++;
            count--;
        }

        //Store Element elements until end of file
        while (count >= 0) {
            if (sessionStorage.getItem("line " + line).search(/(^(\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm) != (-1)) {
                console.log("matched end of file");
                break;
            }
            line++;
            count--;
        }
    }

    reader.onerror = (e) => alert(e.target.error.name);

});