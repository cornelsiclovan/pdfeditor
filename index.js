const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');

fs.readFile('cerere_inregistrare.pdf',async (error, data) => {
    console.log(data); 
    const pdfDoc =await PDFDocument.load(data);
    
     const pages = await pdfDoc.getPages();
     const firstPage = await pages[0]; 
    
    
    const { width, height } = firstPage.getSize();
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    
    
    /// Document 
    /// Cerere 
    /// inregistrare registrul comertului
    /// inregistrare fiscala 
    /// autorizarea functionarii
    firstPage.drawText('Siclovan Cornel', {
        x: 130,
        y: height / 2 + 280,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
     firstPage.drawText('Timisoara', {
        x: 450,
        y: height / 2 + 280,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
     firstPage.drawText('Vasile Cretu', {
        x: 70,
        y: height / 2 + 265,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    firstPage.drawText('15', {
        x: 355,
        y: height / 2 + 265,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    firstPage.drawText('-', {
        x: 410,
        y: height / 2 + 265,
        size: 15,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    firstPage.drawText('-', {
        x: 410,
        y: height / 2 + 265,
        size: 15,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    firstPage.drawText('-', {
        x: 410,
        y: height / 2 + 265,
        size: 15,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    const pdfBytes = await pdfDoc.save();
    
    console.log(pdfBytes);
    
    fs.writeFile("test.pdf", pdfBytes, () => {
        console.log("done");
    });
    
    //download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
});

