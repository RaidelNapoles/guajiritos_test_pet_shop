const { DataTypes } = require("sequelize");
const db = require("../connection");
const Pet = require("../models/pet.model");

const User = db.define("User", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

User.hasMany(Pet);
Pet.belongsTo(User);

module.exports = User;
