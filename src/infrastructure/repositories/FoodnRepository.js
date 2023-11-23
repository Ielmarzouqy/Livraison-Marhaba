const BaseRepository = require("./BaseRepository");
const Foodn = require("../databases/mongodb/models/Foodn");

class FoodnRepository extends BaseRepository {
  constructor() {
    super(Foodn);
  }
}

module.exports = FoodnRepository;