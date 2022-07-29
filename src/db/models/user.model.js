const { DataTypes } = require("sequelize");
const db = require("../connection");
const Pet = require("../models/pet.model");

const User = db.define(
	"User",
	{
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
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

User.hasMany(Pet, { as: "pets", foreignKey: "OwnerId" });
Pet.belongsTo(User, { as: "Owner" });

module.exports = User;
