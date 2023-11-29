const BaseRepository = require("./BaseRepository");
const Restaurant = require("../databases/mongodb/models/Restaurant");

class RestoRepository extends BaseRepository {
  constructor() {
    super(Restaurant);
  }
}

module.exports = RestoRepository;