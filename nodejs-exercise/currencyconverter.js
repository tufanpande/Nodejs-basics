const CC = require('currency-converter-lt')
let currencyConverter = new CC()

currencyConverter.from("NPR").to("USD").amount(100000).convert()
.then((response) => {
  console.log(response) 
})

  