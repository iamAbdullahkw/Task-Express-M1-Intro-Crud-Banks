let accounts = require("../../accounts");

const getAllAccounts = (req, res) => {
  return res.status(200).json(accounts);
};

const addAccount = (req, res) => {
  const id = accounts[accounts.length - 1].id + 1;
  const newAccount = { id, ...req.body, funds: 0 };
  accounts.push(newAccount);
  console.log(req.body);
  return res.status(201).json(accounts);
};
const deleteAccount = (req, res) => {
  const { accountsId } = req.params;
  if (accounts.find((account) => account.id === +accountsId)) {
    accounts = accounts.filter((account) => account.id !== +accountsId);
    return res.status(204).json(accounts);
  } else {
    return res.status(404).json({ message: "account not found" });
  }
};
const updateAccount = (req, res) => {
  const { accountsId } = req.params;
  const foundAccount = accounts.find((account) => account.id === +accountsId);
  if (foundAccount) {
    foundAccount.username = req.body.username;
    foundAccount.funds = req.body.funds;
    return res.status(200).json(foundAccount);
  } else {
    return res.status(404).json({ message: "account not found" });
  }
};

module.exports = { getAllAccounts, addAccount, deleteAccount, updateAccount };
