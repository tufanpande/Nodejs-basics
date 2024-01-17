const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"USD", to:"NPR", amount:100, isDecimalComma:true})

currencyConverter.convert(100).then((response) => {
    console.log(response) //or do something else
}).catch((error) => {
    console.error('Error converting currency:', error.message);
  });

  