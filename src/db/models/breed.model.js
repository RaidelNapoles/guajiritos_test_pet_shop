const { DataTypes } = require("sequelize");
const db = require("../connection");
const Animal = require("../models/animal.model");
const Pet = require("../models/pet.model");

const Breed = db.define(
	"Breed",
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
	},
	{ timestamps: false }
);

Breed.hasMany(Animal);
Animal.belongsTo(Breed);
Breed.hasMany(Pet);
Pet.belongsTo(Breed);

module.exports = Breed;
