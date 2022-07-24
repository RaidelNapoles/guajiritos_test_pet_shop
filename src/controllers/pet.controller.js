const Breed = require("../db/models/breed.model");
const Pet = require("../db/models/pet.model");
const User = require("../db/models/user.model");

const getAll = async (req, res) => {
	const pets = await Pet.findAll({
		include: [{ model: User, as: "Owner" }, Breed],
	});
	res.json({
		pets,
	});
};

const getOne = async (req, res) => {
	const { id } = req.params;
	const pet = await Pet.findByPk(Number(id), {
		include: [{ model: User, as: "Owner" }, Breed],
	});
	res.json({
		pet,
	});
};

const create = async (req, res) => {
	const { body } = req;

	const { BreedId } = body;
	const breed = await Breed.findByPk(BreedId);

	const { OwnerId } = body;
	const owner = await User.findByPk(OwnerId);

	if (!breed) res.status(400).send(`Not found breed with id ${BreedId}`);
	else if (!owner) res.status(400).send(`Not found user with id ${OwnerId}`);
	else {
		const pet = await Pet.create(body);
		res.json({
			pet,
		});
	}
};

const update = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const pet = await Pet.findByPk(Number(id));

	if (pet) {
		const { BreedId } = body;
		if (BreedId) {
			const breed = await Breed.findByPk(BreedId);
			if (!breed)
				return res.status(400).send(`Not found breed with id ${BreedId}`);
		}

		const { OwnerId } = body;
		if (OwnerId) {
			const owner = await User.findByPk(OwnerId);
			if (!owner)
				return res.status(400).send(`Not found user with id ${OwnerId}`);
		}

		await pet.update(body);
		res.json({
			pet,
		});
	} else {
		res.sendStatus(404);
	}
};

const remove = async (req, res) => {
	const { id } = req.params;
	const pet = await Pet.findByPk(Number(id));
	if (pet) {
		await pet.destroy();
		res.send("Pet deleted successfully");
	} else {
		res.sendStatus(404);
	}
};

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove,
};
