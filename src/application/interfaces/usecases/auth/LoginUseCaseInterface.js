/**
 * @interface
 */
class LoginUseCaseInterface {
  /**
   * execute login use case
   * @param {Object} data - The email and password to login
   * @return {Promise<Object>} - A promise that resolves with the login result
   */
  async execute(data) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = LoginUseCaseInterface;
