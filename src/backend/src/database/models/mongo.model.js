import mongoose from "mongoose";

const statisticsSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  accessCount: {
    type: Number,
    default: 0,
  },
  recordDate: {
    type: Date,
    default: Date.now,
  },
  lastAccess: {
    type: Date,
    default: Date.now,
  }
});

const MenuItemAccessStatistics = mongoose.model('menu_item_access_statistics', statisticsSchema)

const restaurantAccessHistory = new mongoose.Schema({
  restaurantId: {
    type: Number,
    required: true,
  },
  restaurantName: {
    type: String,
    required: true,
  },
  customerId: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  accessDate: {
    type: Date,
    default: Date.now,
  }
});

const RestaurantAccessHistory = mongoose.model('restaurant_access_history', restaurantAccessHistory)

export { MenuItemAccessStatistics, RestaurantAccessHistory };