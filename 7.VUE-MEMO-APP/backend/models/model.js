const db = require("../database/database");

class Memos {
  constructor(userId, memoId, memoTitle, memoText) {
    this.userId = userId;
    this.memoId = memoId;
    this.memoTitle = memoTitle;
    this.memoText = memoText;
  }
  static async getAllMemos() {
    const allMemos = await db.getDB().collection("memeos").find().toArray();
    return allMemos;
  }
  async pushMemos() {
    await db.getDB().collection("memeos").insertOne({
      memoBody: this.memoText,
    });
  }
}

module.exports = Memos;
