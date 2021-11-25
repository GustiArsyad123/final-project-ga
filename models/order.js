"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.order.belongsTo(models.user, {
        foreignKey: "id_user",
      });
      models.order.belongsTo(models.recipe, {
        foreignKey: "id_recipe",
      });
      models.order.belongsTo(models.type, {
        foreignKey: "id_type",
      });
      models.order.belongsTo(models.category, {
        foreignKey: "id_category",
      });
      models.order.belongsTo(models.good, {
        foreignKey: "id_good",
      });

      // define association here
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "order",
    }
  );
  return Order;
};
