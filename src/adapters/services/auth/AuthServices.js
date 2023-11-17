const bcrypt = require("bcryptjs");
const AuthServicesInterface = require("../../../application/interfaces/services/auth/AuthServicesInterface");
const JsonWebToken = require("../../../infrastructure/packages/jwt/JsonWebToken");
const UserRepository = require("../../../infrastructure/repositories/UserRepository");
const UserTokenRepository = require("../../../infrastructure/repositories/UserTokenRepository");
const validateData = require("../../../infrastructure/helpers/validateData");

class AuthServices extends AuthServicesInterface {
  constructor() {
    super();
    this.jsonWebToken = new JsonWebToken();
    this.userRepository = new UserRepository();
    this.userTokenRepository = new UserTokenRepository();
    this.validateData = validateData;
  }

  validateRegisterData = async (registerData) => {
    const { error: validationError } = this.validateData(
      registerData,
      "register"
    );

    if (validationError) {
      const error = new Error(validationError.message);
      error.status = validationError.status;

      throw error;
    }
  };

  validateLoginData = async (loginData) => {
    const { error: validationError } = this.validateData(loginData, "login");

    if (validationError) {
      const error = new Error(validationError.message);
      error.status = validationError.status;

      throw error;
    }
  };

  isEmailExist = async (email) => {
    const user = await this.userRepository.findByEmail(email);
    return !!user;
  };

  hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

  comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  };

  register = async (data) => {
    const user = await this.userRepository.create(data);

    if (!user) {
      const error = new Error("User could not be created");
      error.status = 500;

      throw error;
    }

    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      image: user.image,
      phoneNumber: user.phoneNumber,
      address: user.address,
      roles: user.roles.map((role) => role.name),
      isVerified: user.isVerified,
      isBanned: user.isBanned,
    };
  };

  login = async (data) => {
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) {
      const error = new Error("Email does not exist");
      error.status = 404;

      throw error;
    }

    const isPasswordValid = await this.comparePassword(
      data.password,
      user.password
    );
    if (!isPasswordValid) {
      const error = new Error("Password is incorrect");
      error.status = 401;

      throw error;
    }

    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      image: user.image,
      phoneNumber: user.phoneNumber,
      address: user.address,
      roles: user.roles.map((role) => role.name),
      isVerified: user.isVerified,
      isBanned: user.isBanned,
    };
  };

  generateAccessToken = async (payload) => {
    const { access_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.generate(
      payload,
      access_token_secret,
      "15m"
    );
  };

  generateRefreshToken = async (payload) => {
    const { refresh_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.generate(
      payload,
      refresh_token_secret,
      "7d"
    );
  };

  verifyAccessToken = async (token) => {
    const { access_token_secret } = this.jsonWebToken;

    try {
      const payload = await this.jsonWebToken.verify(
        token,
        access_token_secret
      );

      return {
        status: 200,
        payload,
      };
    } catch (err) {
      const error = new Error(
        `Access Denied: ${
          err.message.includes("jwt expired")
            ? "Token expired"
            : "Invalid token"
        } `
      );
      error.status = 401;

      throw error;
    }
  };

  verifyRefreshToken = async (token) => {
    const { refresh_token_secret } = this.jsonWebToken;
    try {
      const payload = await this.jsonWebToken.verify(
        token,
        refresh_token_secret
      );

      return {
        status: 200,
        payload,
      };
    } catch (err) {
      const error = new Error(
        `Access Denied: ${
          err.message.includes("jwt expired")
            ? "Token expired"
            : "Invalid token"
        } `
      );
      error.status = 401;

      throw error;
    }
  };

  saveRefreshToken = async (refreshToken, userId) => {
    const userToken = await this.userTokenRepository.find({ userId });

    if (userToken.length > 0) {
      await this.userTokenRepository.update(userToken[0]._id, {
        refreshToken,
        updatedAt: new Date(),
      });
    } else {
      await this.userTokenRepository.create({
        userId,
        refreshToken,
      });
    }
  };

  deleteRefreshToken = async (refreshToken) => {
    const userToken = await this.userTokenRepository.find({ refreshToken });

    if (userToken.length === 0) {
      const error = new Error("Refresh token does not exist in database");
      error.status = 400;

      throw error;
    }

    await this.userTokenRepository.softDelete(userToken[0]._id);
  };

  generateEmailVerificationToken = async (payload) => {
    const { email_verification_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.generate(
      payload,
      email_verification_token_secret,
      "10m"
    );
  };

  verifyEmailToken = async (token) => {
    const { email_verification_token_secret } = this.jsonWebToken;
    try {
      const payload = await this.jsonWebToken.verify(
        token,
        email_verification_token_secret
      );

      return {
        status: 200,
        payload,
      };
    } catch (error) {
      if (error.message.includes("jwt expired")) {
        return {
          status: 401,
          message: "Token expired",
        };
      }

      return {
        status: 400,
        message: "Invalid token",
      };
    }
  };

  generateResetPasswordToken = async (payload) => {
    const { reset_password_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.generate(
      payload,
      reset_password_token_secret,
      "10m"
    );
  };

  verifyResetPasswordToken = async (token) => {
    const { reset_password_token_secret } = this.jsonWebToken;

    try {
      const payload = await this.jsonWebToken.verify(
        token,
        reset_password_token_secret
      );

      return {
        status: 200,
        payload,
      };
    } catch (error) {
      if (error.message.includes("jwt expired")) {
        return {
          status: 401,
          message: "Token expired",
        };
      }

      return {
        status: 400,
        message: "Invalid token",
      };
    }
  };
}

module.exports = AuthServices;
