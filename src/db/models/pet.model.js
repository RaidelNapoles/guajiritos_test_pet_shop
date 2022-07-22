const { DataTypes } = require("sequelize");
const db = require("../connection");

const Pet = db.define("Pet", {
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

module.exports = Pet;
