const AuthControllerInterface = require("../../../application/interfaces/controllers/auth/AuthControllerInterface");
const LoginUseCase = require("../../../application/usecases/auth/LoginUseCase");
const RegisterUseCase = require("../../../application/usecases/auth/RegisterUseCase");
const LogoutUseCase = require("../../../application/usecases/auth/LogoutUseCase");

class AuthController extends AuthControllerInterface {
  constructor() {
    super();
    this.loginUseCase = new LoginUseCase();
    this.registerUseCase = new RegisterUseCase();
    this.logoutUseCase = new LogoutUseCase();
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
    const { email, password } = req.body;
    const { status, jwt, ...rest } = await this.loginUseCase.execute({
      email,
      password,
    });

    if (jwt) {
      res.cookie("access_token", jwt.accessToken, { httpOnly: true });
      res.cookie("refresh_token", jwt.refreshToken, { httpOnly: true });
    }

    res.status(status).json({ ...rest });
  };

  logout = async (req, res) => {
    const { refresh_token } = req.cookies;

    const { status, ...rest } = await this.logoutUseCase.execute(refresh_token);

    if (status === 200) {
      res.clearCookie("access_token");
      res.clearCookie("refresh_token");
    }

    res.status(status).json({ ...rest });
  };

  refreshToken = async (req, res) => {};
}

module.exports = AuthController;
