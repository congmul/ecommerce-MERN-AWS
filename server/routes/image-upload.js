const express = require('express');
const router = express.Router();
const multer = require('multer');  // Temporary storage for img
const AWS = require('aws-sdk');

const paramsConfig = require('../utils/s3-params-config');

//create a temporary storage container
const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
      callback(null, '');
    }
  });

// contains the storage destination and the key, image
// single method to define this upload function will only receive one image.
const upload = multer({storage}).single('image');

// instantiate the service object, S3
const s3 = new AWS.S3({
    apiVersion: '2006-03-01'
  })


// upload function as the second argument to define the key and storage destination.
router.post('/image-upload', upload, (req, res) => {
    // set up params config
    // we retrieved the image file object, req.file, from the route using multer
    console.log("post('/api/image-upload'", req.file);
    const params = paramsConfig(req.file);

    // set up S3 service call
    s3.upload(params, (err, data) => {
        if(err) {
          console.log(err); 
          res.status(500).send(err);
        }
        res.json(data);
      });

  });

  module.exports = router;