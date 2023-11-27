const firebaseAdmin = require("firebase-admin");
const { firebase } = require("../config/environment");

const initializeFirebase = () => {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(
      JSON.parse(firebase.SERVICE_ACCOUNT_KEY)
    ),
    databaseURL:
      "https://laivrison-marhaba-default-rtdb.europe-west1.firebasedatabase.app",
  });

  return firebaseAdmin.database();
};

module.exports = initializeFirebase();
