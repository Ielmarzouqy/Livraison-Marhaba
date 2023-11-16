const RoleSeeder = require("../infrastructure/databases/mongodb/seeders/RoleSeeder");

const roleSeeder = new RoleSeeder();

const seedDatabase = async () => {
  try {
    await roleSeeder.seed();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDatabase();
