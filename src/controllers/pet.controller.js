const Pet = require("../db/models/pet.model");

const getAll = async (req, res) => {
	const pets = await Pet.findAll();
	res.json({
		pets,
	});
};

const getOne = async (req, res) => {
	const { id } = req.params;
	const pet = await Pet.findByPk(Number(id));
	res.json({
		pet,
	});
};

const create = async (req, res) => {
	const { body } = req;
	const pet = await Pet.create(body);
	res.json({
		pet,
	});
};

const update = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const pet = await Pet.findByPk(Number(id));
	if (pet) {
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
