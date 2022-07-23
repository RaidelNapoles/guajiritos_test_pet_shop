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
	BreedId: {
		type: DataTypes.INTEGER,
		onDelete: "CASCADE",
		references: {
			model: "Breeds",
			key: "id",
		},
	},
	OwnerId: {
		type: DataTypes.INTEGER,
		onDelete: "CASCADE",
		references: {
			model: "Users",
			key: "id",
		},
	},
});

module.exports = Pet;
