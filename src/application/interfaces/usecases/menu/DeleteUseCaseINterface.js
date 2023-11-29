/**
 * @interface
 */
class DeleteUseCaseInterface {
    /**
     * Delete a plate
     * @param {string} plateId - The ID of the plate to delete
     * @returns {Promise<void>} - A promise that resolves when the plate is deleted
     */
    delete = async (plateId) => {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    };
  }

  module.exports = {
    DeleteUseCaseInterface,
  };