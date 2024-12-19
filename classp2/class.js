const fs = require("fs");

const filePath = "./banana.text";


fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  
  const searchTerm = "banana";


  const words = data.split(/\s+/); 


  const index = words.indexOf(searchTerm);


  if (index !== -1 && index + 1 < words.length) {
    const nextWord = words[index + 1];
    console.log(`The word after "banana" is: ${nextWord}`);
  } else {
    console.log(`"banana" is not followed by another word or it's the last word in the file.`);
  }
});
