const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});
const dynamodb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

console.log("Importing ProductLists into DynamoDB. Please wait.");
const allProducts = JSON.parse(fs.readFileSync('./server/seed/products.json', 'utf8'));

allProducts.forEach(product => {
    const params = {
        TableName: "ProductLists",
        Item: {
            "category": product.category,
            "createdAt": product.createdAt,
            "title": product.title,
            "price": product.price
        }
    }

    dynamodb.put(params, (err, data) => {
        if (err) {
            console.error("Unable to add product", product.category, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", product.category);
        }
    });

});