const shopDocs = require("./shop.doc");
const userDocs = require("./user.doc");

const swaggerDoc = {
	openapi: "3.0.0",
	info: {
		title: "Pet Store API",
		version: "1.0.0",
		description: "API for a Pet Store",
	},
	servers: [
		{
			url: "http://localhost:3000",
		},
	],
	tags: [
		{
			name: "User",
			description: "User routes",
		},
		{
			name: "Shop",
			description: "Shop routes",
		},
		{
			name: "Animal",
			description: "Animal routes",
		},
		{
			name: "Breed",
			description: "Breed routes",
		},
	],
	paths: {
		...userDocs,
		...shopDocs,
	},
};

module.exports = swaggerDoc;
