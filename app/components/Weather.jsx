var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getintitialState: function() {
        return {
            isloading:false
            // location: 'Delhi',
            // temp:88
        }
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({isloding:true});
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isloading: false
            });
        }, function (errMessage) {
            that.setState({isloading : false});
            alert(errMessage);
        })
    },
    render: function () {
        var {isloading ,temp, location} = this.state;

        function renderMesssage () {}

        if(isloading) {
            return <h3>Loading ...</h3>
        } else if(temp && location) {
            return <WeatherMessage temp={temp} location={location}/>;
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMesssage()}
            </div>
        );
    }
});

module.exports = Weather;