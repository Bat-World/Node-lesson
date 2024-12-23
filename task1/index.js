import inquirer from 'inquirer'; 
import { faker } from '@faker-js/faker'; 



const questions = [
  {
    type: 'list',
    name: 'dataType',
    message: 'What type of data would you like to generate?',
    choices: ['User Profile', 'Company Info', 'Product Details']
  },
  {
    type: 'number',
    name: 'count',
    message: 'How many entries would you like?',
    default: 1
  }
];


function generateUserProfile(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar()
    });
  }
  return users;
}


function generateCompanyInfo(count) {
  const companies = [];
  for (let i = 0; i < count; i++) {
    companies.push({
      companyName: faker.company.companyName(),
      industry: faker.company.industry(),
      catchPhrase: faker.company.catchPhrase()
    });
  }
  return companies;
}

// Function to generate Product Details
function generateProductDetails(count) {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      productDescription: faker.commerce.productDescription()
    });
  }
  return products;
}


async function run() {
  try {
    const answers = await inquirer.prompt(questions);

  
    const { dataType, count } = answers;

    let generatedData;

    if (dataType === 'User Profile') {
      generatedData = generateUserProfile(count);
    } else if (dataType === 'Company Info') {
      generatedData = generateCompanyInfo(count);
    } else if (dataType === 'Product Details') {
      generatedData = generateProductDetails(count);
    } else {
      console.log('Invalid selection');
      return;
    }


    console.log('\nGenerated Data:');
    console.log(JSON.stringify(generatedData, null, 2));

    if (dataType === 'User Profile') {
      const qrData = generatedData.map(user => user.email).join(',');
      generateQRCode(qrData);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

run();
