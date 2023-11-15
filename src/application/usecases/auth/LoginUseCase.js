const LoginUseCaseInterface = require("../../interfaces/usecases/auth/LoginUseCaseInterface");

class LoginUseCase extends LoginUseCaseInterface {
  constructor({ authService, userRepository, userTokenRepository }) {
    super();
    this.authService = authService;
    this.userRepository = userRepository;
    this.userTokenRepository = userTokenRepository;
  }

  execute = (data) => {};
}

module.exports = LoginUseCase;
