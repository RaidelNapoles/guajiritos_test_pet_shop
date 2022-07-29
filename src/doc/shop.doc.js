const listShops = {
	tags: ["Shop"],
	description: "Returns all pet shops",
	responses: {
		200: {
			description: "A list of shops.",
			content: {
				"application/json": {
					schema: {
						type: "object",
						example: {
							count: 0,
							shops: [],
						},
					},
				},
			},
		},
	},
};

const createShop = {
	tags: ["Shop"],
	description: "Create a new pet shop",
	requestBody: {
		content: {
			"application/json": {
				schema: {
					type: "object",
					properties: {
						name: {
							type: "string",
							description: "Name of the shop",
							example: "Mascota feliz",
						},
					},
				},
			},
		},
	},
};

const shopDocs = {
	"/api/shops": {
		get: listShops,
		post: createShop,
	},
};

module.exports = shopDocs;
