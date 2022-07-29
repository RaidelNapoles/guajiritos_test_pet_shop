const Breed = require("../db/models/breed.model");
const Pet = require("../db/models/pet.model");
const User = require("../db/models/user.model");
const { generateAccessToken } = require("../utils/auth");

const getAll = async (req, res) => {
	const users = await User.findAll({ include: { model: Pet, as: "pets" } });
	res.json({
		count: users.length,
		users,
	});
};

const getOne = async (req, res) => {
	const { id } = req.params;
	const user = await User.findByPk(Number(id), {
		include: { model: Pet, as: "pets" },
	});
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

const buyPet = async (req, res) => {
	const { id } = req.params;
	const { name, BreedId } = req.body;

	const breed = await Breed.findByPk(BreedId);
	if (!breed) return res.status(400).send(`Not found breed with id ${BreedId}`);

	const pet = await Pet.create({ name, BreedId, OwnerId: id });
	res.json({
		pet,
	});
};

const login = async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({
		where: {
			username,
			password,
		},
	});
	if (!user) {
		return res.status(401).send(`Invalid credentials`);
	}

	const accessToken = generateAccessToken({ username });

	res.header("authorization", accessToken).json({
		msg: `Welcome, ${username}`,
		token: accessToken,
	});
};

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove,
	buyPet,
	login,
};
