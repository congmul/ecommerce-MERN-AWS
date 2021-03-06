const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-west-2",
    // endpoint: "http://localhost:8000"
  });

const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const params = {
    TableName : "ProductLists",
    KeySchema: [       
      { AttributeName: "category", KeyType: "HASH"},  // Partition key
      { AttributeName: "createdAt", KeyType: "RANGE" }  // Sort key
    ],
    AttributeDefinitions: [       
      { AttributeName: "category", AttributeType: "S" },
      { AttributeName: "createdAt", AttributeType: "N" }
    ],
    ProvisionedThroughput: {       
      ReadCapacityUnits: 10, 
      WriteCapacityUnits: 10
    }
  };

dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});