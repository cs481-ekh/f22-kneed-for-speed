let input = document.querySelector('input');

input.addEventListener('change', () => {
    let files = input.files;

    if(files.length == 0) {
      alert("No files chosen");
      return;
    }

    const file = files[0];

    // validation
    let filename = file.name.toLowerCase();
    var regex = new RegExp("(.*?)\.(csv)$"); 
    if(!(regex.test(filename))){
      alert("Invalid file. Please upload a csv file.");
      return false;
    }

    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
    };

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file); 
    
});

const form = document.getElementById('form')
const inputFile = document.getElementById('file')

const formData = new FormData()

const handleSubmit = (event) => {
  event.preventDefault()

  for (const file of inputFile.files) {
    formData.append('files', file)
  }
}
form.addEventListener('submit', handleSubmit)
