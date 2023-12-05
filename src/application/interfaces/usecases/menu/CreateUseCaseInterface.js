/**
 * @interface
 */
class CreateUseCaseInterface {
    /**
     * Create a new plate
     * @param {Object} plateData - The data of the plate to create
     * @returns {Promise<Object>} - A promise that resolves with the created plate
     */
    create = async (plateData) => {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
  }


  module.exports = {
    CreateUseCaseInterface,
  };