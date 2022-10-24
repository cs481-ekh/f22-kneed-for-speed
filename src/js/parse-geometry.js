let input = document.getElementById('file');
let submit = document.getElementById('submit');

/* New */
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
            sessionStorage.setItem(count,element);
            console.log(sessionStorage.getItem(count));
            count++;
        });
    }

    reader.onerror = (e) => alert(e.target.error.name);

});