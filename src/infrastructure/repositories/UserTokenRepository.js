const BaseRepository = require("./BaseRepository");

class UserTokenRepository extends BaseRepository {
  constructor({ UserToken }) {
    super(UserToken);
  }
}

module.exports = UserTokenRepository;
