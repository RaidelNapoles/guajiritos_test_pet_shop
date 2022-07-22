const Animal = require("../db/models/animal.model");

const getAll = async (req, res) => {
	const animals = await Animal.findAll();
	res.json({
		animals,
	});
};

const getOne = async (req, res) => {
	const { id } = req.params;
	const animal = await Animal.findByPk(Number(id));
	res.json({
		animal,
	});
};

const create = async (req, res) => {
	const { body } = req;
	const animal = await Animal.create(body);
	res.json({
		animal,
	});
};

const update = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const animal = await Animal.findByPk(Number(id));
	if (animal) {
		await animal.update(body);
		res.json({
			animal,
		});
	} else {
		res.sendStatus(404);
	}
};

const remove = async (req, res) => {
	const { id } = req.params;
	const animal = await Animal.findByPk(Number(id));
	if (animal) {
		await animal.destroy();
		res.send("Animal deleted successfully");
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
