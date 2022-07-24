const Animal = require("../db/models/animal.model");
const Breed = require("../db/models/breed.model");
const Shop = require("../db/models/shop.model");

const getAll = async (req, res) => {
	const animals = await Animal.findAll({ include: [Breed, Shop] });
	res.json({
		animals,
	});
};

const getOne = async (req, res) => {
	const { id } = req.params;
	const animal = await Animal.findByPk(Number(id), { include: [Breed, Shop] });
	res.json({
		animal,
	});
};

const create = async (req, res) => {
	const { body } = req;

	const { BreedId } = body;
	const breed = await Breed.findByPk(BreedId);

	const { ShopId } = body;
	const shop = await Shop.findByPk(ShopId);

	if (!breed) res.status(400).send(`Not found breed with id ${BreedId}`);
	else if (!shop) res.status(400).send(`Not found shop with id ${ShopId}`);
	else {
		const animal = await Animal.create(body);
		res.json({
			animal,
		});
	}
};

const update = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const animal = await Animal.findByPk(Number(id));

	if (animal) {
		const { BreedId } = body;
		if (BreedId) {
			const breed = await Breed.findByPk(BreedId);
			if (!breed)
				return res.status(400).send(`Not found breed with id ${BreedId}`);
		}

		const { ShopId } = body;
		if (ShopId) {
			const shop = await Shop.findByPk(ShopId);
			if (!shop)
				return res.status(400).send(`Not found shop with id ${ShopId}`);
		}

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
