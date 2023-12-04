const MenuRepository = require("../../../repositories/MenuRepository");
const RestaurantRepository = require("../../../repositories/RestaurantRepository");

class MenuSeeder {
  constructor() {
    this.menuRepository = new MenuRepository();
    this.restaurantRepository = new RestaurantRepository();
  }

  seed = async() => {
    try {
      const existingMenus = await this.menuRepository.find();

      if (existingMenus.length === 0) {
        const restaurant1 = await this.restaurantRepository.findOne({ name: "Restaurant 1" });
        const restaurant2 = await this.restaurantRepository.findOne({ name: "Restaurant 2" });

        const menu1 = {
          name: "Menu 1",
          description: "Menu 1 description",
          price: 10,
          restaurant: restaurant1._id,
        };

        const menu2 = {
          name: "Menu 2",
          description: "Menu 2 description",
          price: 15,
          restaurant: restaurant1._id,
        };

        const menu3 = {
          name: "Menu 3",
          description: "Menu 3 description",
          price: 12,
          restaurant: restaurant2._id,
        };

        await Promise.all([
          this.menuRepository.create(menu1),
          this.menuRepository.create(menu2),
          this.menuRepository.create(menu3),
        ]);

        console.log("Menus seeded successfully.");
      } else {
        console.log("Menus already exist. Seeder skipped.");
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = MenuSeeder;