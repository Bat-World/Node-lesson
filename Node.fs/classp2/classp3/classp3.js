
// Merge contexts of two files.


const fs = require('fs');


const mergedFilePath = './merged.txt';


fs.readFile("./file1.txt", 'utf8', (err, file1Data) => {
  if (err) {
    console.error('Error reading file1.txt:', err);
    return;
  }

  fs.readFile("./file2.txt", 'utf8', (err, file2Data) => {
    if (err) {
      console.error('Error reading file2.txt:', err);
      return;
    }

    const mergedContent = "./file1.txt" + '\n' + "./file2.txt";


    fs.writeFile(mergedFilePath, mergedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to merged.txt:', err);
        return;
      }

      console.log('Files have been merged into merged.txt');
    });
  });
});

