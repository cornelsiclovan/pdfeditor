const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');

fs.readFile('cerere_inregistrare.pdf',async (error, data) => {
    console.log(data); 
    const pdfDoc =await PDFDocument.load(data);
    
     const pages = await pdfDoc.getPages();
     const firstPage = await pages[0]; 
    
    
    const { width, height } = firstPage.getSize();
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    
    const form = pdfDoc.getForm();
    const fields = form.getFields();
    
    const formData = {
        'subsemnatul': 'cornel siclovan',
        'domiciliat' : 'Timisoara',
        'strada': 'Vasile Cretu',
        'numar': '10',
        'bloc': '20',
        'scara': '100'
    }
    
    fields.forEach(field => {
        const type = field.constructor.name;
        const name = field.getName();
        console.log(`${type}: ${name}`);
        if(type === 'PDFTextField')
            form.getTextField(name).setText(formData[name]);
        
    });
    
    
//    
//    const subsemnatul     = form.getTextField('subsemnatul');
//    const domiciliat      = form.getTextField('domiciliat');
//    const strada          = form.getTextField('strada');
//    const numar           = form.getTextField('numar');
//    const bloc            = form.getTextField('bloc');
//    const scara           = form.getTextField('scara');
//    const etaj            = form.getTextField('etaj');
//    const apartament      = form.getTextField('apartament');
//    const judet           = form.getTextField('judet');
//    const telefon         = form.getTextField('telefon');
//    const act_ident       = form.getTextField('act_ident');
//    const act_ident_serie = form.getTextField('act_ident_seria')
//    const act_ident_numar = form.getTextField('act_ident_numar')
//          
//          
//    subsemnatul.setText("Cornel Siclovan");
    
    
    //console.log(form);
    
    /*
    /// Document 
    /// Cerere 
    /// inregistrare registrul comertului
    /// inregistrare fiscala 
    /// autorizarea functionarii
    
    
    /// Nume si prenume
    firstPage.drawText('Siclovan Cornel', {
        x: 130,
        y: height / 2 + 280,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    
     /// Oras
     firstPage.drawText('Timisoara', {
        x: 450,
        y: height / 2 + 280,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    
     /// Strada
     firstPage.drawText('Vasile Cretu', {
        x: 70,
        y: height / 2 + 265,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    /// Numar
    firstPage.drawText('15', {
        x: 355,
        y: height / 2 + 265,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Bloc
    firstPage.drawText('-', {
        x: 410,
        y: height / 2 + 265,
        size: 15,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    
    // Scara
    firstPage.drawText('-', {
        x: 460,
        y: height / 2 + 265,
        size: 15,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Etaj
    firstPage.drawText('-', {
        x: 500,
        y: height / 2 + 265,
        size: 15,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Apartament
    firstPage.drawText('-', {
        x: 530,
        y: height / 2 + 265,
        size: 15,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Judet/Sector
    firstPage.drawText('Timis', {
        x: 95,
        y: height / 2 + 250,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Telefon
    firstPage.drawText('0740086744', {
        x: 220,
        y: height / 2 + 250,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Act de identitate
     firstPage.drawText('CI', {
        x: 360,
        y: height / 2 + 250,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Seria
     firstPage.drawText('TM', {
        x: 450,
        y: height / 2 + 250,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Nr
     firstPage.drawText('978362', {
        x: 490,
        y: height / 2 + 250,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Eliberat de
     firstPage.drawText('ipj timis', {
        x: 95,
        y: height / 2 + 235,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // la data
     firstPage.drawText('01.01.2012', {
        x: 300,
        y: height / 2 + 235,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
     // CNP
     firstPage.drawText('1820616115178', {
        x: 420,
        y: height / 2 + 235,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // in calitate de
    firstPage.drawText('calitatea persoanei', {
        x: 100,
        y: height / 2 + 220,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // prin
    firstPage.drawText('bla alsdankds askdfnsdn a das dmas', {
        x: 260,
        y: height / 2 + 220,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // conform
    firstPage.drawText('bla alsdankds askdfnsdn a das dmas', {
        x: 90,
        y: height / 2 + 205,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Pentru firma
    firstPage.drawText('firma xxx srl', {
        x: 115,
        y: height / 2 + 190,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // Numar de ordine in registrul comertului
    firstPage.drawText('123244', {
        x: 250,
        y: height / 2 + 177,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // CUI
    firstPage.drawText('2381237', {
        x: 450,
        y: height / 2 + 177,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    // cusediul in localitatea
    firstPage.drawText('2381237', {
        x: 152,
        y: height / 2 + 161,
        size: 10,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(0),
    });
    
    */
    
    
    const pdfBytes = await pdfDoc.save();
    
    console.log(pdfBytes);
    
    fs.writeFile("test.pdf", pdfBytes, () => {
        console.log("done");
    });
    
    
});

