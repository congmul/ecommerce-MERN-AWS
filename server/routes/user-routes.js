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

// get all users' products
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

router.post('/products', (req, res) => {
  // console.log(req.body);
  let price = parseFloat(req.body.price).toFixed(2);

  // console.log(price);

  const params = {
    TableName: table,
    Item: {
      "category": req.body.category,
      "createdAt": Date.now(),
      "title": req.body.title,
      "price": price,
    }
  }

  dynamodb.put(params, (err, data) => {
    if (err) {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      res.status(500).json(err); // an error occurred
    } else {
      console.log("Added item:", JSON.stringify(data));
      res.json({ "Added": JSON.stringify(data, null, 2) });
    }
  });

});

module.exports = router;