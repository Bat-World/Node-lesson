const fs = require('fs');

const filePath = "./hello.text"

fs.readFile("./hello.text", (err, textfile) => {
    console.log(textfile.toString());
})




fs.writeFile("./hello.text", "changed text", 'utf8', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }

    console.log('Your file changed successfully');
});





const dirPath = '.';  
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Log the list of files in the directory
  console.log('Files in directory:', files);
});
