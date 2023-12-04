const RoleSeeder = require("../infrastructure/databases/mongodb/seeders/RoleSeeder");
const AdminSeeder = require("../infrastructure/databases/mongodb/seeders/AdminSeeder");
const RestaurantSeeder = require("../infrastructure/databases/mongodb/seeders/RestaurantSeeder");
const MenuSeeder = require("../infrastructure/databases/mongodb/seeders/MenuSeeder");

const roleSeeder = new RoleSeeder();
const adminSeeder = new AdminSeeder();
const restaurantSeeder = new RestaurantSeeder();
const menuSeeder = new MenuSeeder();

const seedDatabase = async () => {
  try {
    await roleSeeder.seed();
    await adminSeeder.seed();
    await restaurantSeeder.seed();
    await menuSeeder.seed();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDatabase();
