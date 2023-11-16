const RegisterUseCaseInterface = require("../../interfaces/usecases/auth/RegisterUseCaseInterface");
const AuthServices = require("../../../adapters/services/auth/AuthServices");
const UserRepository = require("../../../infrastructure/repositories/UserRepository");
const UserTokenRepository = require("../../../infrastructure/repositories/UserTokenRepository");

class RegisterUseCase extends RegisterUseCaseInterface {
  constructor() {
    super();
    this.authService = new AuthServices();
    this.userRepository = new UserRepository();
    this.userTokenRepository = new UserTokenRepository();
  }

  execute = (data) => {};
}

module.exports = RegisterUseCase;
