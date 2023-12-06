const firebaseAdmin = require("firebase-admin");
const { firebase } = require("../../config/environment");
const serviceAccount = require("./serviceAccount/firebase-adminsdk.json");

const initializeFirebase = () => {
  try {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
      databaseURL:
        "https://laivrison-marhaba-default-rtdb.europe-west1.firebasedatabase.app",
    });

    return firebaseAdmin.database();
  } catch (error) {
    console.error("Error initializing Firebase:", error);
    return null;
  }
};

module.exports = initializeFirebase();
