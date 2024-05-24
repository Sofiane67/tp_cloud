const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");


router.get("/", clientController.fetchAll)
router.get("/:id", clientController.fetchOne)


module.exports = router;