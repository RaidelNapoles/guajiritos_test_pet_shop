const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (payload) => {
	return jwt.sign(payload, process.env.SECRET, { expiresIn: "5m" });
};

const validateToken = (req, res, next) => {
	const accessToken = req.headers["authorization"];
	if (!accessToken) {
		return res.send("Access denied!");
	}

	jwt.verify(accessToken, process.env.SECRET, (err, user) => {
		if (err) {
			res.send("Access denied, token expired or incorrect");
		} else {
			next();
		}
	});
};

module.exports = { generateAccessToken, validateToken };
