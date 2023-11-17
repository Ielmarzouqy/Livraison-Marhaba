const RoleSeeder = require("../infrastructure/databases/mongodb/seeders/RoleSeeder");
const AdminSeeder = require("../infrastructure/databases/mongodb/seeders/AdminSeeder");

const roleSeeder = new RoleSeeder();
const adminSeeder = new AdminSeeder();

const seedDatabase = async () => {
  try {
    await roleSeeder.seed();
    await adminSeeder.seed();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDatabase();
