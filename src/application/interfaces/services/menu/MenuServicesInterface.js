/**
 * @interface
 */
class MenuServicesInterface {
    /**
     * Create a new menu
     * @param {object} data - The data for the new menu
     * @returns {Promise<object>} - A promise that resolves with the created menu
     */
    createMenu(data) {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    }
  
    /**
     * Get a menu by its ID
     * @param {string} menuId - The ID of the menu
     * @returns {Promise<object>} - A promise that resolves with the menu
     */
    getMenuById(menuId) {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    }
  
    /**
     * Update a menu
     * @param {string} menuId - The ID of the menu to update
     * @param {object} data - The updated data for the menu
     * @returns {Promise<object>} - A promise that resolves with the updated menu
     */
    updateMenu(menuId, data) {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    }
  
    /**
     * Delete a menu
     * @param {string} menuId - The ID of the menu to delete
     * @returns {Promise<void>} - A promise that resolves with nothing
     */
    deleteMenu(menuId) {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    }
  
    /**
     * Get all menus
     * @returns {Promise<Array<object>>} - A promise that resolves with an array of menus
     */
    getAllMenus() {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    }
  }
  
  module.exports = MenuServicesInterface;