import React, { Component } from "react";
import { round } from "lodash";
import { connect } from "react-redux";
import Chart from "../../components/Chart";
import GoogleMap from "../../components/GoogleMap";

class WeatherList extends Component {
  renderWeather(cityData) {
    const {
      city: {
        name,
        country,
        coord: { lon, lat },
      },
      list,
    } = cityData;
    const temperatures = list.map((weather) =>
      round(weather.main.temp - 273.15)
    );
    const pressures = list.map((weather) => weather.main.pressure);
    const humidities = list.map((weather) => weather.main.humidity);
    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temperatures} unity="ºC" color="orange" />
        </td>
        <td>
          <Chart data={pressures} unity="hPa" color="green" />
        </td>
        <td>
          <Chart data={humidities} unity="%" color="blue" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (ºC)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather,
  };
}

export default connect(mapStateToProps, null)(WeatherList);
