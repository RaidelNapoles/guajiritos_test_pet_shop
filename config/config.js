const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	PORT: process.env.PORT || 3000,
	DB_HOST: process.env.DB_HOST || "localhost",
	DB_NAME: process.env.DB_NAME || "pet_shop",
	DB_USER: process.env.DB_USER || "root",
	DB_PASSWORD: process.env.DB_PASSWORD || "",
};
