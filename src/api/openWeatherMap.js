/**
 * Created by MKS on 23.02.2017.
 */
import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?q=';
const OPEN_WEATHER_MAP_API = '&appid=526f6bf3383f0b891513e12866d56505';
const OPEN_WEATHER_MAP_OPTS = '&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}${encodedLocation}${OPEN_WEATHER_MAP_OPTS}${OPEN_WEATHER_MAP_API}`;

        return axios.get(requestUrl).then(function (res) {
            debugger;
            if (res.data.cod && res.data.list[1].message) {
                throw new Error(res.data.list[1].message);
            } else {
                return res.data.list[1].main.temp;
            }
        }, function (res) {
            throw new Error(res.data.list[1].message);
        });
    }
}
