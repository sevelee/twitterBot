console.log('The bot is starting')

var Twitter = require('twitter')

var config = require('../../config')

var client = new Twitter(config)

var tweet = {
    status: '#codingrainbow from node.js'
}

client.post('statuses/update', tweet, tweeted)

function tweeted(err, data, response) {
    if (err) {
        console.log('We get a error')
    } else {
        console.log(data)
    }
}