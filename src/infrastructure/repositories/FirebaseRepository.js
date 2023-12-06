const database = require("../databases/firebase/firebaseConfig");

class FirebaseRepository {
  getData = async (path) => {
    try {
      const snapshot = await database.ref(path).once("value");
      return snapshot.val();
    } catch (error) {
      throw new Error(error);
    }
  };

  setData = async (path, data) => {
    try {
      await database.ref(path).set(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  updateData = async (path, updates) => {
    try {
      await database.ref(path).update(updates);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteData = async (path) => {
    try {
      await database.ref(path).remove();
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = FirebaseRepository;
