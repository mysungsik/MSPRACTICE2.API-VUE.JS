function enableCORS(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();

  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080/") 웬만하면, 주소를 적어주자, 이런식으로
}

module.exports = enableCORS;
