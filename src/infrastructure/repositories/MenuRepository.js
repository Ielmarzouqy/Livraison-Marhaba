const BaseRepository = require("./BaseRepository");
const Menu = require("../databases/mongodb/models/Menu");

class MenuRepository extends BaseRepository {
  constructor() {
    super(Menu);
  }

  findAll = async (includeDeleted = false, restaurantId) => {
    const query = includeDeleted ? {} : { isDeleted: false, restaurantId: restaurantId };
    try {
      return await this.model.find(query).populate("restaurant");
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = MenuRepository;