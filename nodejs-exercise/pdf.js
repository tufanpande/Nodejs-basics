const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('Tufan.pdf'));

// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image('C:/Users/tufan/OneDrive/Desktop/IMG_3853-01.jpeg', {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
  });

doc.end();