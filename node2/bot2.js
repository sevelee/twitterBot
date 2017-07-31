console.log('The bot is starting')

var Twitter = require('twitter')

var config = require('../../config')

var powerShell = require('powershell')

var fs = require('fs')

var client = new Twitter(config)

// config over

//---------------main

TweetIt('#coderainbow from node.js')

//----------------processing 触发

function MakeNewImage() {
    console.log('make image start.')
    var processingCmd = 'processing-java --sketch=$PWD\\processingDraw --run'

    let ps = new powerShell(processingCmd)

    ps.on('output', data => {
        console.log('make image over.')
        return true
    })
}

//----------------follow反应

// var stream = client.stream('user')

// stream.on('follow', Followed)

// function Followed(eventMsg) {
//     console.log(' - follow event - ')
//     var name = eventMsg.source.name
//     var screenName = eventMsg.source.screen_name
//     TweetIt('. @' + screenName + ' Hello and thanks for following !~')
// }

//----------------random tweet
// TweetIt('new message test')

// 函数名， 时间， 函数参数
// setInterval(TweetIt, 1000 * 20, 'new message')

function TweetIt(msg) {
    MakeNewImage()

    console.log('upload image start.')
    var fileName = 'processingDraw/output.png'
    var params = {
        encoding: 'base64'
    }
    var b64content = fs.readFileSync(fileName, params)

    client.post('media/upload', {media_data: b64content}, Uploaded)

    function Uploaded(err, data, response) {
        console.log('image uploaded.')
        var imageID = data.media_id_string
        if (msg == '') {
            msg = '#coderainbow from node.js'
        }
        var tweet_params = {
            status: msg + ' ' + Math.floor(Math.random() * 100),
            media_ids: imageID
        }
        client.post('statuses/update', tweet_params, tweeted)
    }

    function tweeted(err, data, response) {
        if (err) {
            console.log('We get a error')
            console.log(err)
        } else {
            console.log('Sent finished')
        }
    }
}