console.log('The bot is starting')

var Twitter = require('twitter')

var config = require('../../config')

var client = new Twitter(config)

var params = {
    q: 'ガンダム',
    count: 2
}

client.get('search/tweets', params, gotData)

function gotData(err, data, response) {
    var tweets = data.statuses
    var length = tweets.length
    while (length--) {
        console.log(tweets[length].text)
        console.log('------------------------')
    }
}