/**
 * @interface
 */
class AuthServicesInterface {
  /**
   * Validate register data
   * @param {object} registerData - The data to validate
   * @returns {Promise<object>} - A promise that resolves with the validated data
   */
  validateRegisterData = async (registerData) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Validate login data
   * @param {object} loginData - The data to validate
   * @returns {Promise<object>} - A promise that resolves with the validated data
   */
  validateLoginData = async (loginData) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Check if email already exist
   * @param {string} email - The email to check if exist
   * @return {Promise<boolean>} - A promise that resolves with either true or false
   */
  isEmailExist = async (email) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Hashes the given password
   * @param {string} password - The password to hash
   * @returns {Promise<string>} - A promise that resolves with the hashed password
   */
  hashPassword = async (password) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Compares the given password with the given hashed password
   * @param {string} password - The password to compare
   * @param {string} hashedPassword - The hashed password to compare
   * @returns {Promise<boolean>} - A promise that resolves with either true or false
   */
  comparePassword = async (password, hashedPassword) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Register a new user
   * @param {object} data - The data to register
   * @returns {Promise<object>} - A promise that resolves with the registered user
   */
  register = async (data) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Generates an access token
   * @param {object} payload - The payload to sign
   * @returns {Promise<string>} - A promise that resolves with the access token
   */
  generateAccessToken = async (payload) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Generates a refresh token
   * @param {object} payload - The payload to sign
   * @returns {Promise<string>} - A promise that resolves with the refresh token
   */
  generateRefreshToken = async (payload) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Verifies the given access token
   * @param {string} token - The access token to verify
   * @returns {Promise<object>} - A promise that resolves with the decoded access token
   */
  verifyAccessToken = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Verifies the given refresh token
   * @param {string} token - The refresh token to verify
   * @returns {Promise<object>} - A promise that resolves with the decoded refresh token
   */
  verifyRefreshToken = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Save the given refresh token
   * @param {string} token - The refresh token to save
   * @param {string} userId - The user id to save the refresh token
   * @returns {Promise<void>} - A promise that resolves with nothing
   */
  saveRefreshToken = async (token, userId) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Delete the given refresh token
   * @param {string} token - The refresh token to delete
   * @returns {Promise<void>} - A promise that resolves with nothing
   */
  deleteRefreshToken = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Check if the given refresh token exist in the database
   * @param {string} token - The refresh token to check
   * @returns {Promise<void>} - A promise that resolves with nothing
   */
  checkRefreshTokenInDB = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
  /**
   * Generates an email verification token
   * @param {object} payload - The payload to sign
   * @returns {Promise<string>} - A promise that resolves with the email verification token
   */
  generateEmailVerificationToken = async (payload) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Verifies the given email verification token
   * @param {string} token - The email verification token to verify
   * @returns {Promise<object>} - A promise that resolves with the decoded email verification token
   */
  verifyEmailVerificationToken = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Verify the given email
   * @param {number} id - The user id to verify the email
   * @returns {Promise<void>} - A promise that resolves with nothing
   */
  verifyEmail = async (id) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * generate a reset password token
   * @param {object} payload - The payload to sign
   * @returns {Promise<string>} - A promise that resolves with the reset password token
   */
  generateResetPasswordToken = async (payload) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Verifies the given reset password token
   * @param {string} token - The reset password token to verify
   * @returns {Promise<object>} - A promise that resolves with the decoded reset password token
   */
  verifyResetPasswordToken = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Get the user credentials
   * @param {number} id - The user id to get the credentials
   * @returns {Promise<object>} - A promise that resolves with the user credentials
   */
  getUserCredentials = async (id) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = AuthServicesInterface;
