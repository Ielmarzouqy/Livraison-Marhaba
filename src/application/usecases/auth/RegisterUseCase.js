const RegisterUseCaseInterface = require("../../interfaces/usecases/auth/RegisterUseCaseInterface");

class RegisterUseCase extends RegisterUseCaseInterface {
  constructor({ authService, userRepository, userTokenRepository }) {
    super();
    this.authService = authService;
    this.userRepository = userRepository;
    this.userTokenRepository = userTokenRepository;
  }

  execute = (data) => {};
}

module.exports = RegisterUseCase;
