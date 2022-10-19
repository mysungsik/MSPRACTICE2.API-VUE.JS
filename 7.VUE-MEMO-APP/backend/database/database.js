const mongodb = require("mongodb");
const { get } = require("../routes/route");

const mongodbClient = mongodb.MongoClient;

let database;

async function connectMongodb() {
  const client = await mongodbClient.connect("mongodb://127.0.0.1:27017");
  database = client.db("memoDB");
}

function getDB() {
  if (!database) {
    throw new Error("please, conect first");
  }
  return database;
}

module.exports = {
  connectMongodb: connectMongodb,
  getDB: getDB,
};
