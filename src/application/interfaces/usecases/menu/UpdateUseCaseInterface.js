/**
 * @interface
 */
class UpdateUseCaseInterface {
    /**
     * Update a plate
     * @param {string} plateId - The ID of the plate to update
     * @param {Object} plateData - The updated data of the plate
     * @returns {Promise<Object>} - A promise that resolves with the updated plate
     */
    update = async (plateId, plateData) => {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
  }

  module.exports = {
    UpdateUseCaseInterface,
  };