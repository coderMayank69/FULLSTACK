const fs = require('fs');

const folderName = process.argv[2] || 'Project';

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href= "style.css">\n    <title>${folderName}</title>\n</head>\n<body>\n    <script src="script.js"></script>\n</body>\n</html>`);
    fs.writeFileSync(`${folderName}/style.css`, '');
    fs.writeFileSync(`${folderName}/script.js`, '');
}catch(err){
    console.log("Something went wrong!!!");
    console.log(err);
}