/**
 * @interface
 */
class RegisterUseCaseInterface {
  /**
   * execute register use case
   * @param {Object} data - The data to register
   * @return {Promise<Object>} - A promise that resolves with the register result
   */
  async execute(data) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = RegisterUseCaseInterface;
