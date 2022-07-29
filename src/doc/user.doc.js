const listUsers = {
	tags: ["User"],
	description: "Returns all user registered in the system",
	responses: {
		200: {
			description: "A list of users.",
			content: {
				"application/json": {
					schema: {
						type: "object",
						example: {
							count: 0,
							users: [],
						},
					},
				},
			},
		},
	},
};

const createUser = {
	tags: ["User"],
	description: "Create a new user for the system",
	requestBody: {
		content: {
			"application/json": {
				schema: {
					type: "object",
					properties: {
						name: {
							type: "string",
							description: "Name of the user",
							example: "Raidel",
						},
						username: {
							type: "string",
							description: "Name of the user inside the system",
							example: "rainap",
						},
						password: {
							type: "string",
							description: "User password",
							example: "qwerty*A",
						},
					},
				},
			},
		},
	},
};

const userDocs = {
	"/api/users": {
		get: listUsers,
	},
	"/api/users/register": {
		post: createUser,
	},
};

module.exports = userDocs;
