const express = require("express");
const config = require("../../config/config");
const db = require("../db/connection");
const userRoutes = require("../routes/user.route");

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
		this.dbConnection();
		this.middlewares();
		this.routes();
	}

	routes() {
		this.app.use(this.apiPaths.users, userRoutes);
		// this.app.use(this.apiPaths.animals, animalRoutes);
		// this.app.use(this.apiPaths.breeds, breedRoutes);
		// this.app.use(this.apiPaths.pets, petRoutes);
		// this.app.use(this.apiPaths.shops, shopRoutes);
	}

	middlewares() {
		//lectura del body
		this.app.use(express.json());
	}

	async dbConnection() {
		await db.sync();
		console.log("Successfull connection to database!!");
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server running on port: ${this.port}`);
		});
	}
}

module.exports = Server;
