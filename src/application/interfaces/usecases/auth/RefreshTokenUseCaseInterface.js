/**
 * @interface
 */
class RefreshTokenUseCaseInterface {
  /**
   * execute refresh token use case
   * @param {string} refreshToken - The refresh token to refresh
   * @return {Promise<object>} - A promise that resolves with the refresh token result
   */
  execute = async (refreshToken) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = RefreshTokenUseCaseInterface;
