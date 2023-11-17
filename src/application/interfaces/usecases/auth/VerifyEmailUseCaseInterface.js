/**
 * @interface
 */
class VerifyEmailUseCaseInterface {
  /**
   * execute verify email use case
   * @param {string} token - The token to verify email
   * @param {string} refreshToken - The refresh token to generate new access token
   * @return {Promise<Object>} - A promise that resolves with the verify email result
   */
  execute = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = VerifyEmailUseCaseInterface;
