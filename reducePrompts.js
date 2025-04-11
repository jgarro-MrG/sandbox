/* jshint esnext: true */
console.clear();
const computers = [
  {
    company: "Dell",
    model: "Optiplex 700 Desktop",
    processor: "Intel Core i5",
    memory: "16GB",
    storage: {
      amount: 256,
      unit: "Gigabyte",
    },
    price: 899.99,
    reviews: [
      {
        rating: 1,
        text: "Not as fast as advertised.",
      },
      {
        rating: 1,
        text: "I needed to upgrade the storage.",
      },
    ],
  },
  {
    company: "HP",
    model: "Envy Desktop",
    processor: "Intel Core i5",
    memory: "32GB",
    storage: {
      amount: 1,
      unit: "Terabyte",
    },
    price: 599.99,
    reviews: [
      {
        rating: 5,
        text: "Great computer!",
      },
      {
        rating: 4,
        text: "There was a scuff on the tower, but otherise great!",
      },
    ],
  },
  {
    company: "Dell",
    model: "Inspiron 3030 Desktop",
    processor: "Intel Core i7",
    memory: "16GB",
    storage: {
      amount: 1,
      unit: "Terabyte",
    },
    price: 949.99,
    reviews: [
      {
        rating: 3,
        text: "Package was missing keyboard.",
      },
    ],
  },
  {
    company: "HP",
    model: "Desktop",
    processor: "AMD Ryzen 5",
    memory: "12GB",
    storage: {
      amount: 512,
      unit: "Gigabyte",
    },
    price: 499.99,
    reviews: [
      {
        rating: 5,
        text: "Great price for what I need!",
      },
    ],
  },
];

/*
  Use the native reduce method to get the number of computer objects
  that are Dells.
  */
const dellCount = computers.reduce(function (output, computer) {
  if (computer.company === "Dell") {
    output += 1;
  }
  return output;
}, 0);

console.log("1) Number of Dell computers:");
console.log("\t", dellCount); // 2

/*
  Use the native reduce method to create a new array of the company names and
  models of the computer objects whose most recent review was 5 star. Assume
  the last review in the reviews array is the most recent.
  
  [ "HP Desktop" ]
  
  */
const fiveStarModels = computers.reduce((output, computer) => {
  if (computer.reviews[computer.reviews.length - 1].rating === 5) {
    output.push(`${computer.company} ${computer.model}`);
  }
  return output;
}, []);

console.log("2) Computer Models with 5 star ratings:");
console.log("\t", fiveStarModels); // ['HP Desktop']

/*
  Use the native reduce method to create a new array of computer objects
  that have less than 16gb of memory.
*/

const lessThan16GB = computers.reduce((output, computer) => {
  if(computer.memory.includes('GB')) {
    const mem = computer.memory.substring(0,computer.memory.indexOf('GB'));
    if (mem < 16) {
      output.push(computer)
    }
  }  
  return output;
}, []);

console.log("3) Computers with less than 16 GB:");
console.log("\t", lessThan16GB[0]); // {company: 'HP', model: 'Desktop', processor: 'AMD Ryzen 5', memory: '12GB', storage: {…}, …}

/*
  Use the native reduce method to create a string of each computer object's model
  followed by a dash and the amount of storage and a linebreak character.
  
  // example output
  Optiplex 700 Desktop - Storage: 256 Gigabyte
  Envy Desktop - Storage: 1 Terabyte
  Inspiron 3030 Desktop - Storage: 1 Terabyte
  Desktop - Storage: 512 Gigabyte
  
  // output with linebreak
  "Optiplex 700 Desktop - Storage: 256 Gigabyte\nEnvy Desktop - Storage: 1 Terabyte\n..."
*/
const modelAndStorage = computers.reduce((output, computer) => {
  output += (`\t- ${computer.model} - Storage: ${computer.storage.amount} ${computer.storage.unit}\n`);
  return output;
}, "");

console.log("4) Models and Storage:");
console.log(modelAndStorage); //

/*
  Use the native reduce method to create an object where each key is the computer
  object's model and the value at each key is the price.
  
  // example output
  {
   'Optiplex 700 Desktop': 899.99,
   'Envy Desktop': 599.99,
   'Inspiron 3030 Desktop': 949.99,
   'Desktop': 499.99
  }
  */

  const modelAndPrices = computers.reduce((output, computer) => {
    output[computer.model] = computer.price;
    return output;
  }, {});
  
  console.log("5) Models and Prices:");
  console.log("\t", modelAndPrices); // {Optiplex 700 Desktop: 899.99, Envy Desktop: 599.99, Inspiron 3030 Desktop: 949.99, Desktop: 499.99}
