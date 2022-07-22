const { DataTypes } = require("sequelize");
const db = require("../connection");

const Breed = db.define("Breed", {
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

module.exports = Breed;
