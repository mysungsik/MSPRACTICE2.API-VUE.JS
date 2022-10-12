const db = require("../data/database")

class Quote {
    static async getRandomQuote(){
        const quote = await db.getDb().collection("quote").find().toArray()

        // 랜덤 수를 소환해서, 총 배열의 수를 뽑아 곱한후, 내림처리해서, 랜덤인덱스숫자를 만들 수 있다.
        const randomQuoteIndex = Math.floor( Math.random() * quote.length )

        const randomQuote = quote[randomQuoteIndex];

        return randomQuote.text
    }
}

module.exports = Quote