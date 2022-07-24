const { DataTypes } = require("sequelize");
const db = require("../connection");

const Animal = db.define(
	"Animal",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

module.exports = Animal;
