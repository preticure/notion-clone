const router = require("express").Router();
const memoController = require("../controllers/memo");
const tokenHandler = require("../handlers/tokenHandler");

router.post("/", tokenHandler.verifyToken, memoController.create);

module.exports = router;
