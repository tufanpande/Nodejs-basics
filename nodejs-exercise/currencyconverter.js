const CC = require('currency-converter-lt')
let currencyConverter = new CC()

currencyConverter.from("USD").to("NPR").amount(1).convert()
.then((response) => {
  console.log(response) 
})

  