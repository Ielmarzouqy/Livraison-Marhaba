const RestaurantRepository = require("../../../repositories/RestaurantRepository");

class RestaurantSeeder {
  constructor() {
    this.restaurantRepository = new RestaurantRepository();
  }

  seed = async () => {
    try {
      const existingRestaurants = await this.restaurantRepository.find();

      if (existingRestaurants.length === 0) {
        const restaurant1 = {
          name: "Restaurant 1",
          description: "Description 1",
          address: "Address 1",
          phoneNumber: "1234567890",
          location: {
            type: "Point",
            coordinates: [31.6340, -7.9999], // Coordinates for a location in Morocco
          },
          image: null,
        };

        const restaurant2 = {
          name: "Restaurant 2",
          description: "Description 2",
          address: "Address 2",
          phoneNumber: "1234567890",
          location: {
            type: "Point",
            coordinates: [33.5731, -7.5898], // Coordinates for a location in Morocco
          },
          image: null,
        };

        const restaurant3 = {
          name: "Restaurant 3",
          description: "Description 3",
          address: "Address 3",
          phoneNumber: "1234567890",
          location: {
            type: "Point",
            coordinates: [30.4333, -9.6000], // Coordinates for a location in Morocco
          },
          image: null,
        };

        await this.restaurantRepository.create(restaurant1);
        await this.restaurantRepository.create(restaurant2);
        await this.restaurantRepository.create(restaurant3);

        console.log("Restaurants seeded successfully.");
      } else {
        console.log("Restaurants already exist. Seeder skipped.");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = RestaurantSeeder;