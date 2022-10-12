const quoteModel = require("../model/quote-model")

async function simpleQuote(req,res,next){
    
    try{
        const data = await quoteModel.getRandomQuote()
        res.json(data)
    }catch(error){
        return next(error)
    }

    }

module.exports = {
    simpleQuote:simpleQuote
}