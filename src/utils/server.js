const express = require("express");
const config = require("../../config/config");
const db = require("../db/connection");
const userRoutes = require("../routes/user.route");
const animalRoutes = require("../routes/animal.route");
const breedRoutes = require("../routes/breed.route");
const petRoutes = require("../routes/pet.route");
const shopRoutes = require("../routes/shop.route");

class Server {
	constructor() {
		this.app = express();
		this.port = Number(config.PORT);
		this.apiPaths = {
			users: "/api/users",
			animals: "/api/animals",
			breeds: "/api/breeds",
			pets: "/api/pets",
			shops: "/api/shops",
		};
		this.middlewares();
		this.routes();
	}

	async init() {
		await this.dbConnection();
		this.listen();
	}

	routes() {
		this.app.use(this.apiPaths.users, userRoutes);
		this.app.use(this.apiPaths.animals, animalRoutes);
		this.app.use(this.apiPaths.breeds, breedRoutes);
		this.app.use(this.apiPaths.pets, petRoutes);
		this.app.use(this.apiPaths.shops, shopRoutes);
	}

	middlewares() {
		//lectura del body
		this.app.use(express.json());
	}

	async dbConnection() {
		try {
			// await db.query("CREATE DATABASE `pet_shop` IF NOT EXISTS");
			await db.sync();
			console.log("Successfully database connection!!");
		} catch (error) {
			console.log(error);
		}
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server running on port: ${this.port}`);
		});
	}
}

module.exports = Server;
