const Breed = require("../db/models/breed.model");

const getAll = async (req, res) => {
	const breeds = await Breed.findAll();
	res.json({
		breeds,
	});
};

const getOne = async (req, res) => {
	const { id } = req.params;
	const breed = await Breed.findByPk(Number(id));
	res.json({
		breed,
	});
};

const create = async (req, res) => {
	const { body } = req;
	const breed = await Breed.create(body);
	res.json({
		breed,
	});
};

const update = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const breed = await Breed.findByPk(Number(id));
	if (breed) {
		await breed.update(body);
		res.json({
			breed,
		});
	} else {
		res.sendStatus(404);
	}
};

const remove = async (req, res) => {
	const { id } = req.params;
	const breed = await Breed.findByPk(Number(id));
	if (breed) {
		await breed.destroy();
		res.send("Breed deleted successfully");
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
