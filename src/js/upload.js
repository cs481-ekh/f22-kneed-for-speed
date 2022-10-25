let input = document.querySelector('input');

input.addEventListener('change', () => {
  
  /* file validation */
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
  }
})