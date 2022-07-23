const { DataTypes } = require("sequelize");
const db = require("../connection");
const Animal = require("../models/animal.model");

const Shop = db.define("Shop", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

Shop.hasMany(Animal);
Animal.belongsTo(Shop);

module.exports = Shop;
