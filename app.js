const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is you name?'
    }
  ])
  .then(answers => console.log(answers));
  
// const pageHTML = generatePage(name, github);

                        // const profileDataArgs = process.argv.slice(2, process.argv.length);
                        //   const [name, github] = profileDataArgs

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });
      



// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// }

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
}


    // profileDataArr.forEach((profileItem) => {
    //   console.log(profileItem)
//     });

//  };
//   };
