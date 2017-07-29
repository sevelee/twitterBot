console.log('The bot is starting')

var Twitter = require('twitter')

var config = require('../../config')

var client = new Twitter(config)

var params = {
    q: '中古',
    count: 2
}

client.get('search/tweets', params, gotData)

function gotData(err, data, response) {
    console.log(data)
}