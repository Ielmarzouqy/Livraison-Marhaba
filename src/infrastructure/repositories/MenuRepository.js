const BaseRepository = require("./BaseRepository");
const Menu = require("../databases/mongodb/models/Menu");

class MenuRepository extends BaseRepository {
  constructor() {
    super(Menu);
  }
}

module.exports = MenuRepository;