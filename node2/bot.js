console.log('The bot is starting')

var twit = require('twit')

var config = require('../../config')

var myTwit = new twit(config)

var params = {
    q: 'rainbow',
    count: 2
}

console.log('start to twit get')
myTwit.get('search/tweets', params, GotData)

function GotData(err, data, response) {
    console.log(data)
}