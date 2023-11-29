const { Schema, model, models } = require("../mongoose");

const restaurantSchema = Schema({
  name: {
    type: String,
    required: [true, "Restaurant name is required"],
  },
  description: {
    type: String,
    required: [true, "Restaurant description is required"],
  },
  address: {
    type: String,
    required: [true, "Restaurant address is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  image: {
    type: String,
    default: null,
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

restaurantSchema.index({ location: "2dsphere" });

const Restaurant = models.Restaurant || model("Restaurant", restaurantSchema);

module.exports = Restaurant;