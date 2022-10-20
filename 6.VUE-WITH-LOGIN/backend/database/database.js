const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

let database;

async function connectMongodb() {
  const client = await mongoClient.connect("mongodb://127.0.0.1:27017");
  database = client.db("vue-login");
}

function getDb() {
  if (!database) {
    throw new Error("you have to connect firtst");
  }
  return database;
}

module.exports = {
  connectMongodb: connectMongodb,
  getDb: getDb,
};
