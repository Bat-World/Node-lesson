const fs = require('fs');
const path = require('path');


const dirPath = './classp4';  


fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }


  files.forEach((file) => {
    const filePath = path.join(dirPath, file); 

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return;
      }
      console.log(`Deleted file: ${filePath}`);
    });
  });
});


