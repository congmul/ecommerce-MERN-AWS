const express = require('express');
const router = express.Router();
const AWS = require("aws-sdk");
const awsConfig = {
  region: "us-west-2",
  endpoint: "http://localhost:8000",

};

AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = "ProductLists";

// get all users' thoughts
router.get('/products', (req, res) => {
    const params = {
      TableName: table
    };
    dynamodb.scan(params, (err, data) => {
      if (err) {
        res.status(500).json(err); // an error occurred
      } else {
        res.json(data.Items)
      }
    });
  })

module.exports = router;