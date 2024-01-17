//Generate QR Code for  the url on the terminal using package qrcode.
const qrcode = require('qrcode-terminal');

const generator = (URLs) => {
    URLs.forEach((URL) => {
        const urlString = URL.toString();

        // Generate and display the QR code in the terminal
        qrcode.generate(urlString, { small: true }, function (qrcode) {
            console.log(qrcode);
        });
    });
};
const qrGen = ['https://github.com/tufanpande'];
generator(qrGen);