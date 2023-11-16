const AuthControllerInterface = require("../../../application/interfaces/controllers/auth/AuthControllerInterface");
const LoginUseCase = require("../../../application/usecases/auth/LoginUseCase");
const RegisterUseCase = require("../../../application/usecases/auth/RegisterUseCase");

class AuthController extends AuthControllerInterface {
  constructor() {
    super();
    this.loginUseCase = new LoginUseCase();
    this.registerUseCase = new RegisterUseCase();
  }

  register = async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      image,
      phoneNumber,
      address,
      roleNames,
    } = req.body;

    const { status, jwt, ...rest } = await this.registerUseCase.execute({
      firstName,
      lastName,
      email,
      password,
      image,
      phoneNumber,
      address,
      roleNames,
    });

    if (jwt) {
      res.cookie("access_token", jwt.accessToken, { httpOnly: true });
      res.cookie("refresh_token", jwt.refreshToken, { httpOnly: true });
    }

    res.status(status).json({ ...rest });
  };

  login = async (req, res) => {
    const { status, jwt, ...rest } = await this.loginUseCase.execute({
      ...req.body,
    });

    if (jwt) {
      res.cookie("access_token", jwt.accessToken, { httpOnly: true });
      res.cookie("refresh_token", jwt.refreshToken, { httpOnly: true });
    }

    res.status(status).json({ ...rest });
  };

  logout = async (req, res) => {};

  refreshToken = async (req, res) => {};
}

module.exports = AuthController;
