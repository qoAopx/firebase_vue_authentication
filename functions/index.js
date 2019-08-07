const functions = require('firebase-functions');
const admin = require('firebase-admin');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp();
exports.helloWorld = functions.https.onRequest((request, response) => {
    //response.send("Hello from Firebase!");
    //console.log(request.headers.authorization);
    response.header({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
    });
    try {
        const token = request.headers.authorization.split('Bearer ')[1];
        admin.auth().verifyIdToken(token).then(r => {
            console.log(r);
            response.json(r);
        }).catch(e => {
            response.json(e);
        });
    } catch (e) {
        response.json(e);
    }
});
