const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        address: DataTypes.STRING,
        number: DataTypes.STRING,
        postal_code: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Address;
