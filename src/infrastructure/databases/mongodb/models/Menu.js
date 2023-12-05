const { Schema, model, models } = require("../mongoose");

const menuSchema = Schema({
  name: {
    type: String,
    required: [true, "Menu name is required"],
  },
  description: {
    type: String,
    required: [true, "Menu description is required"],
  },
  price: {
    type: Number,
    required: [true, "Menu price is required"],
  },
  image: {
    type: String,
    default: null,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    default: null
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Menu = models.Menu || model("Menu", menuSchema);

module.exports = Menu;