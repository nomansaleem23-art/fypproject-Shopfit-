
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
    databaseURL: "http://fyp-ecommerce-website-225c8.firebaseio.com"
});

module.exports = admin;
