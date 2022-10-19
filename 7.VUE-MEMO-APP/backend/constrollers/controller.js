const Models = require("../models/model");

async function pushMemos(req, res) {
  const memoText = req.body.inputMemo;
  const memoId = req.body.inputMemoId;
  const model = new Models(null, memoId, null, memoText);
  const pushData = await model.pushMemos();

  const allData = await Models.getAllMemos();
  res.json({
    message: "nice",
    allData: allData,
  });
}

function getMemos(req, res) {
  const memos = {
    memoID: "6",
    memoBody: "가져온메모",
  };

  res.json({ memos: memos });
}
async function getAllmemos(req, res) {
  const allmemos = await Models.getAllMemos();
  res.json(allmemos);
}

module.exports = {
  getMemos: getMemos,
  pushMemos: pushMemos,
  getAllmemos: getAllmemos,
};
