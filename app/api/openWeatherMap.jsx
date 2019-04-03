var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='gons.in';

module.exports ={
    getTemp: function (location) {
        var encodedLocaton = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocaton}`;

        return axios.get(requestUrl).then (function (res){
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}