const router = require("express").Router();
const memoController = require("../controllers/memo");
const tokenHandler = require("../handlers/tokenHandler");

router.post("/", tokenHandler.verifyToken, memoController.create);

router.get("/", tokenHandler.verifyToken, memoController.getAll);

router.get("/:memoId", tokenHandler.verifyToken, memoController.getOne);

router.put("/:memoId", tokenHandler.verifyToken, memoController.update);

module.exports = router;
