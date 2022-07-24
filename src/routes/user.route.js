const {
	create,
	remove,
	getOne,
	getAll,
	update,
	buyPet,
} = require("../controllers/user.controller");
const { Router } = require("express");

const router = Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);
router.post("/:id/buyPet", buyPet);

module.exports = router;
