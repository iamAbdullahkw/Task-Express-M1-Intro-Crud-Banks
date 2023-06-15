const express = require("express");
const accountRouter = require("./apis/accounts/accounts.routes");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/api/accounts", accountRouter);

app.listen(PORT, () => {
  console.log("Server is Successfully Running," + PORT);
});
