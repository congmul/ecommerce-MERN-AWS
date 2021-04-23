// This file has a singular purpose: to return a configured params object

const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'product-images-d0376ffc-bb00-41bf-9aaa-73b44a71a4de',
      Key: `${uuidv4()}.${fileType}`, // the name of this file.
      Body: fileName.buffer, // we assign the buffer property of the image. This is the temporary storage container of the image file. Once the buffer has been used, the temporary storage space is removed by multer.
      ACL: 'public-read' // allow read access to this file
    };
  
    return imageParams;
  };

module.exports = params;