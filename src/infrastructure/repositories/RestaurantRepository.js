const BaseRepository = require("./BaseRepository");
const Restaurant = require("../databases/mongodb/models/Restaurant");

class RestaurantRepository extends BaseRepository {
  constructor() {
    super(Restaurant);
  }
}

module.exports = RestaurantRepository;