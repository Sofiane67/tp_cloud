const express = require("express");
const router = express.Router();
const invoiceController = require("../controller/invoiceController");

const {
    fetchAll,
    fetchById,
    createInvoice,
    editInvoice,
    removeInvoice,
} = invoiceController;

router.get("/", fetchAll)
router.get("/:id", fetchById)
router.post("/", createInvoice)
router.patch("/:id", editInvoice)
router.delete("/:id", removeInvoice)

module.exports = router;