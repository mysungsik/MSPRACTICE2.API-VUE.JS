const usersDatas = [
  {
    id: 3,
    name: "ms",
    loginId: "audtlr",
    loginPw: "fkffkf",
  },
  {
    id: 4,
    name: "js",
    loginId: "wltlr",
    loginPw: "fkffkf2",
  },
];

function getAccount(req, res) {
  // db에서 가져온다면 여기 들어가게
  const account = {
    userid: "ms",
    userName: "msms",
  };

  res.json({ account: account });
}

function login(req, res) {
  const enteredUserId = req.body.enteredUserID;
  const enteredUserPassword = req.body.enteredUserPassword;

  const accessInfo = usersDatas.find(function (item) {
    return (
      item.loginId == enteredUserId && item.loginPw === enteredUserPassword
    );
  });

  if (accessInfo) {
    res.json({ message: " good loged in", userInput: accessInfo });
  } else {
    res.json({ message: "login Faile" });
  }
}

module.exports = {
  getAccount: getAccount,
  login: login,
};
