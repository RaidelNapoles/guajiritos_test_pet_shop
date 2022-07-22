const User = require("../db/models/user.model");

const getAll = async (_req, res) => {
	const users = await User.findAll();
	res.json({
		users,
	});
};

const getOne = async (req, res) => {
	const { id } = req.params;
	const user = await User.findByPk(Number(id));
	res.json({
		user,
	});
};

const create = async (req, res) => {
	const { body } = req;
	const user = await User.create(body);
	res.json({
		user,
	});
};

const update = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	const user = await User.findByPk(Number(id));
	if (user) {
		await user.update(body);
		res.json({
			user,
		});
	} else {
		res.sendStatus(404);
	}
};

const remove = async (req, res) => {
	const { id } = req.params;
	const user = await User.findByPk(Number(id));
	if (user) {
		await user.destroy();
		res.send("User deleted successfully");
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
