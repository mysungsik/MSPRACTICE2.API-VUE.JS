function getAccount(req, res) {
  const account = {
    id: "ms",
    password: "msms",
  };

  res.json({ account: account });
}

module.exports = {
  getAccount: getAccount,
};
