var pm_config = require('../../pm_config')

var pm_token = pm_config.token

var city = 'beijing'

var pm_path = 'https://api.waqi.info' + '/feed/:' + city + '/?token=:' + pm_token

app.get(pm_path, function(err, data) {
    console.log(data)
})