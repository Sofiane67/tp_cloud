const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");


router.get("/", clientController.fetchAll)


module.exports = router;