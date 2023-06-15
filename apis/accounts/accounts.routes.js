const express = require("express");
const router = express.Router();

const {
  getAllAccounts,
  addAccount,
  deleteAccount,
  updateAccount,
} = require("./accounts.controllers");

router.get("/", getAllAccounts);

router.post("/", addAccount);

router.delete("/:accountsId", deleteAccount);

router.put("/:accountsId", updateAccount);

module.exports = router;
