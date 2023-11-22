
/**
 * @interface
 */
class GetUseCaseInterface {
    /**
     * Get a plate by its ID
     * @param {string} plateId - The ID of the plate
     * @returns {Promise<Object>} - A promise that resolves with the retrieved plate
     */
    getById = async (plateId) => {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
    
    /**
     * Get all plates
     * @returns {Promise<Array<Object>>} - A promise that resolves with an array of all plates
     */
    getAll = async () => {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
  }

  
  module.exports = {
    GetUseCaseInterface,
  };