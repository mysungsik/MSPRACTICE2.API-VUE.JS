const express = require("express")
const app = express()

const db = require("./data/database")
const baseRoute = require("./routes/quote-route")

app.use("/quote",baseRoute)


// API에는 VIEW 따위처럼 보이는 것이 없고, 전부 데이터이기 때문에,
//  "상태코드" 를 정확하게 적고, 메시지를 적는것이 아주아주 중요하다.
//  나의 API를 이용하는 고객들이, 오류가 났을때 유일하게 알 수 있는 방법이다.

app.use(function(error,req,res,next){
    res.status(500).json({
        message: "something went wrong!"
    })
})

db.connectToDatabase().then(function(){
    app.listen(3000)
}).catch(function(error){
    console.log("connecting to the database failed")
})
