const express = require('express');
const router = express.Router();
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

//=============== AWS IDs ===============
const userPoolId = process.env.USERPOOLID;
const clientId = process.env.CLIENTID;

let poolData = {
    UserPoolId: userPoolId,
    ClientId: clientId
};

router.post("/signup", (req, res) => {
    let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    let attributeList = [];

    const dataEmail = {
        Name: 'email',
        Value: req.body.email
    };

    // const dataPhoneNumber = {
    //     Name: 'phone_number',
    //     Value: '+15555555555',
    // };

    let attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    // let attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);

    attributeList.push(attributeEmail);
    // attributeList.push(attributePhoneNumber);
    
    userPool.signUp(req.body.email, req.body.password, attributeList, null, function (err, result) {
        if (err) {
            console.log(err.message);
            res.status(400).json({'err' : err});
        } else {
            cognitoUser = result.user;
            console.log('Registration Successful!');
            console.log('Username is: ' + cognitoUser.getUsername());
            console.log('Please enter the verification code sent to your Email.');
            res.status(200).json({'result': result})
        }
    });


});

module.exports = router;