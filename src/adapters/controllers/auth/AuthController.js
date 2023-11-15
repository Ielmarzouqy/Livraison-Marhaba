const AuthControllerInterface = require("../../../application/interfaces/controllers/auth/AuthControllerInterface");

class AuthController extends AuthControllerInterface {
  constructor({ loginUseCase, registerUseCase }) {
    super();
    this.loginUseCase = loginUseCase;
    this.registerUseCase = registerUseCase;
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
