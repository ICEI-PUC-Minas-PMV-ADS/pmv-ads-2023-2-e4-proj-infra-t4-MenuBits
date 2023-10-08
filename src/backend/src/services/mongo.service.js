import { MenuItemAccessStatistics, RestaurantAccessHistory } from "../database/models/mongo.model.js";

class MongoService {
  async getItemAccessCount(itemId) {
    const menuItemAccess = await MenuItemAccessStatistics
      .findOne({ itemId });

    if (!menuItemAccess) {
      return {
        accessCount: 0,
        lastAccess: null,
      }
    }
    return {
      accessCount: menuItemAccess.accessCount,
      lastAccess: menuItemAccess.lastAccess,
    };
  }

  async getUserAccessHistory(customerId) {
    return await RestaurantAccessHistory
      .find({ customerId })
      .sort({ accessDate: -1 });
  }

  async increaseManyItemsAccesses(items) {
    const menuItemsAccesses = await MenuItemAccessStatistics.find({
      itemId: { $in: items.map(i => i.id) }
    });
  
    const menuItemsAccessesMap = new Map(
      menuItemsAccesses.map(menuItemAccess => [menuItemAccess.itemId.toString(), menuItemAccess])
    );
  
    const bulkOperations = [];
  
    items.forEach(item => {
      const itemId = item.id.toString();
      if (menuItemsAccessesMap.has(itemId)) {
        const menuItemAccess = menuItemsAccessesMap.get(itemId);
        menuItemAccess.accessCount += 1;
        menuItemAccess.lastAccess = Date.now();
        bulkOperations.push({
          updateOne: {
            filter: { _id: menuItemAccess._id },
            update: {
              $set: {
                accessCount: menuItemAccess.accessCount,
                lastAccess: menuItemAccess.lastAccess
              }
            }
          }
        });
      } else {
        bulkOperations.push({
          insertOne: {
            document: {
              itemId,
              itemName: item.name,
              accessCount: 1,
              lastAccess: Date.now()
            }
          }
        });
      }
    });
  
    if (bulkOperations.length > 0) {
      await MenuItemAccessStatistics.bulkWrite(bulkOperations);
    }

  }  

  async increaseItemAccess(item) {
    const menuItemAccess = await MenuItemAccessStatistics
      .findOne({ itemId: item.id });

    if (!menuItemAccess) {
      return await MenuItemAccessStatistics.create({
        itemId: item.id,
        itemName: item.name,
        accessCount: 1,
        lastAccess: Date.now(),
      });
    }
    menuItemAccess.accessCount += 1;
    return await menuItemAccess.save();
  }

  async storeCustomerHistory(restaurant, customer) {
    const existingHistory = await RestaurantAccessHistory.findOne({
      restaurantId: restaurant.id,
      customerId: customer.id,
    });

    if (existingHistory) {
      existingHistory.accessDate = Date.now();
      await existingHistory.save();
      return existingHistory;
    } else {
      const newHistory = new RestaurantAccessHistory({
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        customerId: customer.id,
        customerName: customer.name,
        accessDate: Date.now(),
      });

      await newHistory.save();
    }
  }

  async storeManyCustomerHistory(restaurants, customer) {
    for (const restaurant of restaurants) {
      const existingHistory = await RestaurantAccessHistory.findOne({
        restaurantId: restaurant.id,
        customerId: customer.id,
      });
    
    if (existingHistory) {
      existingHistory.accessDate = Date.now();
      await existingHistory.save();
    } else {
      const history = new RestaurantAccessHistory({
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        customerId: customer.id,
        customerName: customer.name,
        accessDate: Date.now(),
      });

      await history.save();
      }
    }
  }
}

export default new MongoService();