console.log('The bot is starting')

var Twitter = require('twitter')

var config = require('../../config')

var client = new Twitter(config)

// config over

//----------------follow反应

var stream = client.stream('user')

stream.on('follow', Followed)

function Followed(eventMsg) {
    console.log(' - follow event - ')
    var name = eventMsg.source.name
    var screenName = eventMsg.source.screen_name
    TweetIt('. @' + screenName + ' Hello and thanks for following !~')
}

//----------------random tweet
// TweetIt('new message test')

// 函数名， 时间， 函数参数
// setInterval(TweetIt, 1000 * 20, 'new message')

function TweetIt(msg) {

    var r = Math.floor(Math.random()*100)

    var tweet = {
        // status: 'random nuber ' + r + ' ' + msg
        status: msg
    }

    client.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response) {
        if (err) {
            console.log('We get a error')
        } else {
            console.log('Sent finished')
        }
    }
}