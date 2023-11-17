/**
 * @interface
 */
class LogoutUseCaseInterface {
  /**
   * execute logout use case
   * @param {string} refreshToken - The refresh token to logout
   * @return {Promise<void>} - A promise that resolves with the logout result
   */
  execute = async (refreshToken) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = LogoutUseCaseInterface;
