//NPM packages
const supreme = require('supreme-api');
var colors = require('colors');
var readlineSync = require('readline-sync');


//Waiting for user input then storing as variable
const categoryslist = console.log("\nAvailable categories:" + "\n-New\n-Jackets\n-Shirts\n-Tops/sweaters\n-Pants\n-Hats\n-Bags\n-Accessories\n-Shoes\n-Skate\n".underline.green);
var categoryinput = readlineSync.question('Please enter a category to monitor from the list above: '.yellow);
var supremeitem = readlineSync.question('Please enter a keyword to search for: '.yellow);
var styleinput = readlineSync.question('Please enter a style/color to search for: '.yellow);

const category = categoryinput;
const keywords = supremeitem;
const style = styleinput;

console.log('\nMonitor launching via:'.cyan, category.cyan + '\n');

//monitor starts here
    supreme.seek(category, keywords, style, (product, err) => {
      if (err) {
          console.log(err.red);
      } else if (keywords == supremeitem) {
        console.log('Product found!\n'.green + "\nProduct name: ".black.bgGreen + product.title.black.bgGreen )
      }
    });
