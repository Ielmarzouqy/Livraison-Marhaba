const RoleSeeder = require("../infrastructure/databases/mongodb/seeders/RoleSeeder");
const AdminSeeder = require("../infrastructure/databases/mongodb/seeders/AdminSeeder");
const FoodnSeeder = require("../infrastructure/databases/mongodb/seeders/FoodnSeeder");
const OrdernSeeder = require("../infrastructure/databases/mongodb/seeders/OrdernSeeder");
const RestaurantSeeder = require("../infrastructure/databases/mongodb/seeders/RestaurantSeeder");
const MenuSeeder = require("../infrastructure/databases/mongodb/seeders/MenuSeeder");


const roleSeeder = new RoleSeeder();
const adminSeeder = new AdminSeeder();
const foodnSeeder = new FoodnSeeder();
const ordernSeeder = new OrdernSeeder();
const restaurantSeeder = new RestaurantSeeder();
const menuSeeder = new MenuSeeder();

const seedDatabase = async () => {
  try {
    // await roleSeeder.seed();
    // await adminSeeder.seed();
    // await foodnSeeder.seed();
    // await ordernSeeder.seed();


    await restaurantSeeder.seed();
    await menuSeeder.seed();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDatabase();
