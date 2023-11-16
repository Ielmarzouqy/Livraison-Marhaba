const LoginUseCaseInterface = require("../../interfaces/usecases/auth/LoginUseCaseInterface");
const AuthServices = require("../../../adapters/services/auth/AuthServices");
const UserRepository = require("../../../infrastructure/repositories/UserRepository");
const UserTokenRepository = require("../../../infrastructure/repositories/UserTokenRepository");

class LoginUseCase extends LoginUseCaseInterface {
  constructor() {
    super();
    this.authService = new AuthServices();
    this.userRepository = new UserRepository();
    this.userTokenRepository = new UserTokenRepository();
  }

  execute = (data) => {};
}

module.exports = LoginUseCase;
