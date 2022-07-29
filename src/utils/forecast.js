//WEATHERSTACK API KEY
//8bd03ca7e71483a427133c4bf1e13dc7

const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8bd03ca7e71483a427133c4bf1e13dc7&query=' +latitude + ',' +longitude + '&units=m'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.current.weather_descriptions[0] +". It is currently " +body.current.temperature +" degress out. It feels like " +body.current.feelslike +' degrees. The humidity is ' +body.current.humidity)
        }
    })
}

module.exports = forecast