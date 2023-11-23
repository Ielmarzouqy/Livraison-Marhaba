const BaseRepository = require("./BaseRepository");
const User = require("../databases/mongodb/models/User");
const Foodn = require("../databases/mongodb/models/Foodn");
const Ordern = require("../databases/mongodb/models/Ordern");
const FoodnRepository = require("./FoodnRepository");

class OrdernRepository extends BaseRepository {
  constructor() {
    super(Ordern);
    this.foodnModel = Foodn;
  }

//   create = async (data) => {
//     const { foodnNames, ...foodnCredentials } = data;
//     try {
//       const foodns = await this.foodnModel.find({ name: { $in: foodnNames } });

//       if (foodns.length !== foodnNames.length) {
//         throw new Error("Food does not exist");
//       }

//       return await this.model.create({
//         foodns,
//         ...foodnCredentials,
//       });
//     } catch (error) {
//       throw new Error(error);
//     }
//   };

//   createMany = async (data) => {
//     try {
//       const availableRoles = await this.roleModel.find();

//       if (!availableRoles) {
//         throw new Error("Roles do not exist");
//       }

//       const users = data.map((user) => {
//         const { roleNames, ...userCredentials } = user;

//         const roles = availableRoles.filter((role) =>
//           roleNames.includes(role.name)
//         );

//         return {
//           roles,
//           ...userCredentials,
//         };
//       });

//       return await this.model.insertMany(users);
//     } catch (error) {
//       throw new Error(error);
//     }
//   };

//   findByEmail = async (email) => {
//     try {
//       return await this.model.findOne({ email });
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
}

module.exports = FoodnRepository;
