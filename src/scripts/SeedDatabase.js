const RoleSeeder = require("../infrastructure/databases/mongodb/seeders/RoleSeeder");
const AdminSeeder = require("../infrastructure/databases/mongodb/seeders/AdminSeeder");
const FoodnSeeder = require("../infrastructure/databases/mongodb/seeders/FoodnSeeder");
const OrdernSeeder = require("../infrastructure/databases/mongodb/seeders/OrdernSeeder");


const roleSeeder = new RoleSeeder();
const adminSeeder = new AdminSeeder();
const foodnSeeder = new FoodnSeeder();
const ordernSeeder = new OrdernSeeder();



const seedDatabase = async () => {
  try {
    await roleSeeder.seed();
    await adminSeeder.seed();
    await foodnSeeder.seed();
    await ordernSeeder.seed();


    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDatabase();
