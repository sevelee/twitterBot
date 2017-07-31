var pm_config = require('../../pm_config')

var pm_token = pm_config.token

var city = 'beijing'

var pm_path = 'https://api.waqi.info' + '/feed/' + city + '/?token=' + pm_token

var getJSON = require('get-json')

console.log(pm_path)

getJSON(pm_path, function(error, response) {
    if (error) {
        console.log('get pm data error.')
    } else {
        console.log(response.data.city.name)
        console.log(response.data.iaqi.pm25.v)
    }
})