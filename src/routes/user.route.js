const {
	create,
	remove,
	getOne,
	getAll,
	update,
	buyPet,
	login,
} = require("../controllers/user.controller");
const { Router } = require("express");
const { validateToken } = require("../utils/auth");

const router = Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/register", create);
router.put("/:id", update);
router.delete("/:id", remove);
router.post("/:id/buyPet", validateToken, buyPet);
router.post("/login", login);

module.exports = router;
