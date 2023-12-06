const FoodnRepository = require("../../../repositories/FoodnRepository");

class FoodnSeeder {
  constructor() {
    this.foodnRepository = new FoodnRepository();
  }

  seed = async () => {
    try {
      const existingFoodns = await this.foodnRepository.find();

      if (existingFoodns.length === 0) {
        const foodns = [
            { name: 'Food1', description: 'Description for Food1', price: 10 },
            { name: 'Food2', description: 'Description for Food2', price: 15 },
        ];
        await this.foodnRepository.createMany(foodns);
        console.log("food notification collection seeded successfully.");
      } else {
        console.log("food notification collection already has data. Seeder skipped.");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = FoodnSeeder;
