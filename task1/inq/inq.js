import inquirer from 'inquirer';


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'age',
      message: 'How old are you?',
      validate: (input) => {
        if (isNaN(input)) {
          return 'Please enter a valid number for age.';
        }
        return true;
      }
    }
  ])
  .then((answers) => {
    // Use user feedback
    const { name, age } = answers;
    console.log(`Hello ${name}, you are ${age} years old!`);
  })
  .catch((error) => {

    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('Prompt couldn\'t be rendered in this environment');
    } else {
      // Something else went wrong
      console.log('An error occurred:', error);
    }
  });

