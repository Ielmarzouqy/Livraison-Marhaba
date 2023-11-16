const AuthControllerInterface = require("../../../application/interfaces/controllers/auth/AuthControllerInterface");
const LoginUseCase = require("../../../application/usecases/auth/LoginUseCase");
const RegisterUseCase = require("../../../application/usecases/auth/RegisterUseCase");

class AuthController extends AuthControllerInterface {
  constructor() {
    super();
    this.loginUseCase = new LoginUseCase();
    this.registerUseCase = new RegisterUseCase();
  }

  async register(req, res) {
    const { status, jwt, ...rest } = await this.registerUseCase.execute({
      ...req.body,
    });

    if (jwt) {
      res.cookie("access_token", jwt.accessToken, { httpOnly: true });
      res.cookie("refresh_token", jwt.refreshToken, { httpOnly: true });
    }

    res.status(status).json({ ...rest });
  }

  async login(req, res) {
    const { status, jwt, ...rest } = await this.loginUseCase.execute({
      ...req.body,
    });

    if (jwt) {
      res.cookie("access_token", jwt.accessToken, { httpOnly: true });
      res.cookie("refresh_token", jwt.refreshToken, { httpOnly: true });
    }

    res.status(status).json({ ...rest });
  }

  async logout(req, res) {}

  async refreshToken(req, res) {}
}

module.exports = AuthController;
