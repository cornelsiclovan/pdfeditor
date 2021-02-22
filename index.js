const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const util = require('util');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
let descriptionString = '';
const readFolder = './MODELE_DOCUMENTE/';

let files = [];

const getFiles = () => {
    return readDir(readFolder, files);
};

getAllFiles = async () => {
    await getFiles().then(data => {
        data.forEach(file => {
          files.push(file);
        });
    });
  

    files.forEach(file => {
        let filename = file;

        file = path.join(readFolder, file);
        
        let pathWrite = path.join(__dirname, 'DOCUMENTE_COMPLETATE');
        let descriptionFilePath = path.join(__dirname, "descriere.txt");
       
        
        const formData = {
            'subsemnatul': 'sorin siclovan',
            'subsemnat': 'cornel siclovan',
            'domiciliat' : 'Timisoara',
            'strada': 'Vasile Cretu',
            'numar': '10',
            'bloc': '20',
            'scara': '100'
        } 
        
        let userFolder = path.join('DOCUMENTE_COMPLETATE', formData.subsemnatul);
    
        if(!fs.existsSync(userFolder))
            fs.mkdirSync(userFolder);

        pathWrite = path.join(pathWrite, formData.subsemnatul);
 
        pathWrite = path.join(pathWrite, filename);


        fs.readFile(file, async (error, data) => {
            
            const pdfDoc =await PDFDocument.load(data);
    
            const pages = await pdfDoc.getPages();
            const firstPage = await pages[0]; 
           
           
           const { width, height } = firstPage.getSize();
           const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
           
           const form = pdfDoc.getForm();
           const fields = form.getFields();

           
           descriptionString += filename;
           descriptionString += '\n';
           descriptionString += '------------------------------------';
           descriptionString += '\n';

           fields.forEach(field => {
               const type = field.constructor.name;
               const name = field.getName();
               descriptionString += `${type}: ${name}`;
               descriptionString += '\n'
     
               if(type === 'PDFTextField')
                   form.getTextField(name).setText(formData[name]);
               
           });

           descriptionString += '\n';


           fs.writeFile(descriptionFilePath, descriptionString, err => {})

           const pdfBytes = await pdfDoc.save();
    
           fs.writeFile( pathWrite, pdfBytes, () => {
               console.log("done"); 
           });       

        });
        
    });
}

getAllFiles();


