const Shop = require("../db/models/shop.model");

const getAll = async (req, res) => {
	const shops = await Shop.findAll();
	res.json({
		shops,
	});
};

const getOne = async (req, res) => {
	const { id } = req.params;
	const shop = await Shop.findByPk(Number(id));
	res.json({
		shop,
	});
};

const create = async (req, res) => {
	const { body } = req;
	const shop = await Shop.create(body);
	res.json({
		shop,
	});
};

const update = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const shop = await Shop.findByPk(Number(id));
	if (shop) {
		await shop.update(body);
		res.json({
			shop,
		});
	} else {
		res.sendStatus(404);
	}
};

const remove = async (req, res) => {
	const { id } = req.params;
	const shop = await Shop.findByPk(Number(id));
	if (shop) {
		await shop.destroy();
		res.send("Shop deleted successfully");
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
