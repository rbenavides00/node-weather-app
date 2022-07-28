//MAPBOX API KEY
//pk.eyJ1IjoianVsaXVzY3JtIiwiYSI6ImNrZ2E5d3JtcTA1N3YzMHFxeHNmeWQ0NXcifQ._feTz_GDSavdk22OsnkChg

const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoianVsaXVzY3JtIiwiYSI6ImNrZ2E5d3JtcTA1N3YzMHFxeHNmeWQ0NXcifQ._feTz_GDSavdk22OsnkChg&limit=1'
    
    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode