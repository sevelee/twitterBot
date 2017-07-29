console.log('The bot is starting')

var Twitter = require('twitter')

var config = require('../../config')

var client = new Twitter(config)

client.get('favorites/list', function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.log(error)
    console.log('error happened')
  }
})