class Menu {
    constructor({
      id,
      name,
      description,
      price,
      image = null,
      restaurant,
      addedBy,
      createdAt = new Date(),
      updatedAt = new Date(),
      isDeleted = false,
    }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.image = image;
      this.restaurant = restaurant;
      this.addedBy = addedBy;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.isDeleted = isDeleted;
    }
  }
  
  module.exports = Menu;