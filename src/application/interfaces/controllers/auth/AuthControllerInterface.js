/**
 * @interface
 */
class AuthControllerInterface {
  /**
   * Registers a new user.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves to nothing.
   */
  register = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Logs in a user.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves to nothing.
   */
  login = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Logs out a user.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves to nothing.
   */
  logout = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Refreshes a user's token.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves to nothing.
   */
  refreshToken = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = AuthControllerInterface;
